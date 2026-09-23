import fs from 'fs';
import path from 'path';

export interface BackendUser {
  userId: string;
  name: string;
  email: string;
  phone: string;
  mobile: string;
  password?: string;
  selectedLanguage: 'en' | 'te' | 'hi' | 'mr';
  language: 'en' | 'te' | 'hi' | 'mr';
  avatarUrl?: string;
  createdAt: string;
}

export interface SessionRecord {
  token: string;
  userId: string;
  createdAt: number;
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// In-memory active sessions (token -> SessionRecord)
const activeSessions = new Map<string, SessionRecord>();

function ensureDataDirectory(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Failed to initialize data directory for users:', err);
  }
}

// Initialize on module load
ensureDataDirectory();

export function readUsersFromDisk(): BackendUser[] {
  try {
    ensureDataDirectory();
    if (!fs.existsSync(USERS_FILE)) {
      return [];
    }
    const content = fs.readFileSync(USERS_FILE, 'utf-8');
    return content ? JSON.parse(content) : [];
  } catch (err) {
    console.error('Failed to read users database:', err);
    return [];
  }
}

export function writeUsersToDisk(users: BackendUser[]): void {
  try {
    ensureDataDirectory();
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write users database:', err);
  }
}

export function normalizeIdentifier(identifier: string): { clean: string; digits: string; isEmail: boolean } {
  const clean = identifier.trim().toLowerCase();
  const digits = identifier.replace(/\D/g, '');
  const isEmail = clean.includes('@');
  return { clean, digits, isEmail };
}

export interface LoginResult {
  success: boolean;
  error?: 'ACCOUNT_NOT_FOUND' | 'INVALID_CREDENTIALS' | 'INVALID_FORMAT';
  message?: string;
  user?: Omit<BackendUser, 'password'>;
  session?: string;
}

export function loginUserBackend(identifier: string, credential?: string): LoginResult {
  const { clean, digits, isEmail } = normalizeIdentifier(identifier);

  if (!clean) {
    return {
      success: false,
      error: 'INVALID_FORMAT',
      message: 'Please enter a valid mobile number or email.'
    };
  }

  const users = readUsersFromDisk();

  // Find user by phone digits or email
  const user = users.find((u) => {
    const uDigits = (u.phone || u.mobile || '').replace(/\D/g, '');
    const uEmail = (u.email || '').trim().toLowerCase();
    return (digits.length >= 10 && uDigits.endsWith(digits.slice(-10))) || uEmail === clean;
  });

  if (!user) {
    return {
      success: false,
      error: 'ACCOUNT_NOT_FOUND',
      message: 'Account not found. Please register first.'
    };
  }

  // If user has a password registered, verify credential matches
  if (user.password) {
    if (!credential || user.password !== credential) {
      return {
        success: false,
        error: 'INVALID_CREDENTIALS',
        message: 'Invalid login details. Please try again.'
      };
    }
  }

  // Generate session token
  const token = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  activeSessions.set(token, {
    token,
    userId: user.userId,
    createdAt: Date.now()
  });

  const { password: _, ...safeUser } = user;

  return {
    success: true,
    user: safeUser,
    session: token
  };
}

export interface RegisterResult {
  success: boolean;
  error?: 'USER_ALREADY_EXISTS' | 'INVALID_INPUT';
  message?: string;
  user?: Omit<BackendUser, 'password'>;
  session?: string;
}

export function registerUserBackend(data: {
  name: string;
  email: string;
  mobile: string;
  password?: string;
  language?: 'en' | 'te' | 'hi' | 'mr';
}): RegisterResult {
  const name = (data.name || '').trim();
  const email = (data.email || '').trim().toLowerCase();
  const digits = (data.mobile || '').replace(/\D/g, '');
  const language = data.language || 'en';

  if (!name || name.length < 2) {
    return {
      success: false,
      error: 'INVALID_INPUT',
      message: 'Please enter your full name.'
    };
  }

  if (!email || !email.includes('@')) {
    return {
      success: false,
      error: 'INVALID_INPUT',
      message: 'Please enter a valid email address.'
    };
  }

  if (digits.length < 10) {
    return {
      success: false,
      error: 'INVALID_INPUT',
      message: 'Please enter a valid 10-digit mobile number.'
    };
  }

  const users = readUsersFromDisk();

  // Check uniqueness of mobile or email
  const existing = users.find((u) => {
    const uDigits = (u.phone || u.mobile || '').replace(/\D/g, '');
    const uEmail = (u.email || '').trim().toLowerCase();
    return (digits.length >= 10 && uDigits.endsWith(digits.slice(-10))) || uEmail === email;
  });

  if (existing) {
    return {
      success: false,
      error: 'USER_ALREADY_EXISTS',
      message: 'An account with this mobile number or email already exists. Please login.'
    };
  }

  const userId = `farmer_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  const newUser: BackendUser = {
    userId,
    name,
    email,
    phone: digits.slice(-10),
    mobile: digits.slice(-10),
    password: data.password || '',
    selectedLanguage: language,
    language,
    avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  writeUsersToDisk(users);

  // Generate session token
  const token = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  activeSessions.set(token, {
    token,
    userId: newUser.userId,
    createdAt: Date.now()
  });

  const { password: _, ...safeUser } = newUser;

  return {
    success: true,
    user: safeUser,
    session: token
  };
}

export function getSessionUser(token: string): Omit<BackendUser, 'password'> | null {
  if (!token) return null;
  const session = activeSessions.get(token);
  if (!session) return null;

  const users = readUsersFromDisk();
  const user = users.find((u) => u.userId === session.userId);
  if (!user) return null;

  const { password: _, ...safeUser } = user;
  return safeUser;
}

export function invalidateSession(token: string): void {
  if (token) {
    activeSessions.delete(token);
  }
}

// In-memory verification tokens (token -> { userId, expiresAt })
const verificationTokens = new Map<string, { userId: string; expiresAt: number }>();

// In-memory OTP storage (target -> { code, expiresAt })
const activeOtps = new Map<string, { code: string; expiresAt: number }>();

export function verifyUserPasswordBackend(
  userId: string,
  password?: string
): {
  success: boolean;
  error?: string;
  message?: string;
  verificationToken?: string;
} {
  const users = readUsersFromDisk();
  const user = users.find((u) => u.userId === userId);
  if (!user) {
    return {
      success: false,
      error: 'USER_NOT_FOUND',
      message: 'User account not found.'
    };
  }

  // If user has a password registered, strictly verify it
  if (user.password) {
    if (!password || user.password !== password) {
      return {
        success: false,
        error: 'INCORRECT_PASSWORD',
        message: 'Incorrect password. Please try again.'
      };
    }
  }

  const token = `verif_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  verificationTokens.set(token, {
    userId,
    expiresAt: Date.now() + 15 * 60 * 1000 // 15 minutes validity
  });

  return {
    success: true,
    verificationToken: token
  };
}

export function updateUserProfileBackend(
  userId: string,
  data: { name?: string; avatarUrl?: string }
): {
  success: boolean;
  error?: string;
  message?: string;
  user?: Omit<BackendUser, 'password'>;
} {
  const users = readUsersFromDisk();
  const userIndex = users.findIndex((u) => u.userId === userId);
  if (userIndex === -1) {
    return {
      success: false,
      error: 'USER_NOT_FOUND',
      message: 'User account not found.'
    };
  }

  const user = users[userIndex];

  if (data.name !== undefined) {
    const trimmed = data.name.trim();
    if (trimmed.length < 2) {
      return {
        success: false,
        error: 'INVALID_NAME',
        message: 'Please enter a valid full name.'
      };
    }
    user.name = trimmed;
    if (!data.avatarUrl) {
      user.avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(trimmed)}`;
    }
  }

  if (data.avatarUrl) {
    user.avatarUrl = data.avatarUrl;
  }

  users[userIndex] = user;
  writeUsersToDisk(users);

  const { password: _, ...safeUser } = user;
  return {
    success: true,
    user: safeUser,
    message: 'Profile updated successfully.'
  };
}

export function createOtpBackend(
  target: string,
  type: 'mobile' | 'email'
): { success: boolean; message: string; devCode: string } {
  const code = Math.floor(1000 + Math.random() * 9000).toString();
  const cleanTarget = target.toLowerCase().trim();
  activeOtps.set(cleanTarget, {
    code,
    expiresAt: Date.now() + 10 * 60 * 1000
  });

  return {
    success: true,
    message: `Verification code sent to ${target}`,
    devCode: code
  };
}

export function verifyOtpBackend(
  target: string,
  code: string
): { success: boolean; error?: string; message?: string } {
  const cleanTarget = target.toLowerCase().trim();
  const cleanCode = (code || '').trim();

  // Accept test code 1234 or active generated OTP
  const record = activeOtps.get(cleanTarget);
  if (cleanCode === '1234' || (record && record.code === cleanCode && Date.now() <= record.expiresAt)) {
    activeOtps.delete(cleanTarget);
    return { success: true };
  }

  return {
    success: false,
    error: 'INVALID_OTP',
    message: 'Invalid verification code. Please try again.'
  };
}

export function updateUserMobileBackend(
  userId: string,
  newMobile: string,
  verificationToken?: string,
  password?: string
): {
  success: boolean;
  error?: string;
  message?: string;
  user?: Omit<BackendUser, 'password'>;
} {
  const users = readUsersFromDisk();
  const userIndex = users.findIndex((u) => u.userId === userId);
  if (userIndex === -1) {
    return {
      success: false,
      error: 'USER_NOT_FOUND',
      message: 'User account not found.'
    };
  }

  const user = users[userIndex];

  // Verify authorization
  let isAuthorized = false;
  if (verificationToken) {
    const v = verificationTokens.get(verificationToken);
    if (v && v.userId === userId && Date.now() <= v.expiresAt) {
      isAuthorized = true;
    }
  }
  if (!isAuthorized && password && user.password) {
    if (user.password === password) {
      isAuthorized = true;
    }
  }
  if (!isAuthorized && !user.password) {
    isAuthorized = true;
  }

  if (!isAuthorized) {
    return {
      success: false,
      error: 'UNAUTHORIZED',
      message: 'Password verification required before changing mobile number.'
    };
  }

  const digits = (newMobile || '').replace(/\D/g, '');
  if (digits.length < 10) {
    return {
      success: false,
      error: 'INVALID_MOBILE',
      message: 'Please enter a valid 10-digit mobile number.'
    };
  }

  const cleanMobile = digits.slice(-10);

  // Check uniqueness across all other accounts
  const conflict = users.find(
    (u) =>
      u.userId !== userId &&
      ((u.phone || '').replace(/\D/g, '').endsWith(cleanMobile) ||
        (u.mobile || '').replace(/\D/g, '').endsWith(cleanMobile))
  );

  if (conflict) {
    return {
      success: false,
      error: 'MOBILE_ALREADY_EXISTS',
      message: 'This mobile number is already registered to another account.'
    };
  }

  user.mobile = cleanMobile;
  user.phone = cleanMobile;
  users[userIndex] = user;
  writeUsersToDisk(users);

  const { password: _, ...safeUser } = user;
  return {
    success: true,
    user: safeUser,
    message: 'Mobile number updated successfully.'
  };
}

export function updateUserEmailBackend(
  userId: string,
  newEmail: string,
  verificationToken?: string,
  password?: string
): {
  success: boolean;
  error?: string;
  message?: string;
  user?: Omit<BackendUser, 'password'>;
} {
  const users = readUsersFromDisk();
  const userIndex = users.findIndex((u) => u.userId === userId);
  if (userIndex === -1) {
    return {
      success: false,
      error: 'USER_NOT_FOUND',
      message: 'User account not found.'
    };
  }

  const user = users[userIndex];

  // Verify authorization
  let isAuthorized = false;
  if (verificationToken) {
    const v = verificationTokens.get(verificationToken);
    if (v && v.userId === userId && Date.now() <= v.expiresAt) {
      isAuthorized = true;
    }
  }
  if (!isAuthorized && password && user.password) {
    if (user.password === password) {
      isAuthorized = true;
    }
  }
  if (!isAuthorized && !user.password) {
    isAuthorized = true;
  }

  if (!isAuthorized) {
    return {
      success: false,
      error: 'UNAUTHORIZED',
      message: 'Password verification required before changing email address.'
    };
  }

  const cleanEmail = (newEmail || '').trim().toLowerCase();
  if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
    return {
      success: false,
      error: 'INVALID_EMAIL',
      message: 'Please enter a valid email address.'
    };
  }

  // Check uniqueness across all other accounts
  const conflict = users.find(
    (u) => u.userId !== userId && (u.email || '').trim().toLowerCase() === cleanEmail
  );

  if (conflict) {
    return {
      success: false,
      error: 'EMAIL_ALREADY_EXISTS',
      message: 'This email address is already registered to another account.'
    };
  }

  user.email = cleanEmail;
  users[userIndex] = user;
  writeUsersToDisk(users);

  const { password: _, ...safeUser } = user;
  return {
    success: true,
    user: safeUser,
    message: 'Email address updated successfully.'
  };
}
