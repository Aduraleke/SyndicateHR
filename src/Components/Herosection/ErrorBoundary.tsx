

import React from "react";
import { motion } from "framer-motion";

type ErrorBoundaryState = { hasError: boolean; errorMessage?: string };

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Optional: Log to a remote error tracking service
    console.error("Animation Error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-[#1a0000]/80 border border-red-500/40 
                     text-red-100 text-center backdrop-blur-md shadow-[0_0_20px_rgba(255,0,0,0.2)]
                     max-w-md mx-auto mt-8"
        >
          <h2 className="text-lg font-semibold mb-2">⚠️ Something went wrong</h2>
          <p className="text-sm text-red-200 mb-3">
            There was a problem rendering this animation. Try reloading the page.
          </p>
          {process.env.NODE_ENV === "development" && (
            <pre className="text-xs text-red-300 bg-red-950/50 p-3 rounded-md overflow-x-auto">
              {this.state.errorMessage}
            </pre>
          )}
          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-red-600/90 hover:bg-red-700 text-white text-sm rounded-lg transition"
          >
            Reload Page
          </button>
        </motion.div>
      );
    }

    return this.props.children;
  }
}
