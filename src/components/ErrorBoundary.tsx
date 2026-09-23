import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  private handleGoHome = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-[#fcf9f8] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#ffdad6] flex items-center justify-center text-[#93000a] mb-4">
            <span className="material-symbols-outlined text-3xl">error</span>
          </div>
          <h1 className="text-xl font-bold text-[#1b1c1c] mb-2">
            Something went wrong
          </h1>
          <p className="text-sm text-[#5f5e59] max-w-md mb-6">
            An unexpected error occurred. Please try again or restart the application.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={this.handleReset}
              className="px-5 py-2.5 bg-[#002d1c] text-white text-sm font-semibold rounded-full hover:bg-[#1a4331] transition-all cursor-pointer"
            >
              Try Again
            </button>
            <button
              type="button"
              onClick={this.handleGoHome}
              className="px-5 py-2.5 bg-[#f0eded] text-[#1b1c1c] text-sm font-semibold rounded-full hover:bg-[#e5e2db] transition-all cursor-pointer"
            >
              Restart App
            </button>
          </div>
          {this.state.error && (
            <details className="mt-6 text-left max-w-md">
              <summary className="text-xs text-[#717973] cursor-pointer">
                Technical details
              </summary>
              <pre className="mt-2 p-3 bg-[#f0eded] rounded-lg text-xs text-[#5f5e59] overflow-auto max-h-32">
                {this.state.error.message}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;