import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Check if we're in development mode based on window location
      const isDevelopment = 
        window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1';

      return (
        <div className="p-8 bg-black/90 text-white flex flex-col items-center justify-center min-h-[200px] rounded-lg border border-red-800">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h2>
          <p className="mb-4 text-gray-300">The application encountered an error. Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700 transition"
          >
            Refresh Page
          </button>
          {isDevelopment && this.state.error && (
            <details className="mt-4 p-4 bg-gray-900 rounded text-left w-full overflow-auto">
              <summary className="cursor-pointer mb-2 text-red-400">Error Details</summary>
              <pre className="text-xs text-gray-400 whitespace-pre-wrap">
                {this.state.error.toString()}
              </pre>
              {this.state.errorInfo && (
                <pre className="text-xs text-gray-500 mt-2 whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 