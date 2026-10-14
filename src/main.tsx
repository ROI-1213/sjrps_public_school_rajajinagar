import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: any }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '32px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '40px auto', background: '#fff', border: '2px solid #ef4444', borderRadius: '8px' }}>
          <h2 style={{ color: '#dc2626' }}>⚠️ React Rendering Error Caught</h2>
          <p style={{ color: '#4b5563' }}>A component failed to render:</p>
          <pre style={{ background: '#fef2f2', padding: '16px', borderRadius: '6px', overflowX: 'auto', color: '#991b1b', fontSize: '13px' }}>
            {this.state.error?.stack || this.state.error?.message || String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

window.addEventListener('error', (event) => {
  console.error('Captured window error:', event.error);
  const root = document.getElementById("root");
  if (root && (!root.innerHTML || root.innerHTML.trim() === '')) {
    root.innerHTML = `<div style="padding: 24px; color: red; font-family: sans-serif; background: #fff;">
      <h2>Application Error Caught</h2>
      <pre style="white-space: pre-wrap; background: #fee; padding: 12px; border-radius: 4px;">${event.error ? (event.error.stack || event.error.message || String(event.error)) : event.message}</pre>
    </div>`;
  }
});

try {
  const container = document.getElementById("root");
  if (!container) throw new Error("Root container element not found");
  const root = createRoot(container);
  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
} catch (err: any) {
  console.error("Mount error:", err);
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = `<div style="padding: 24px; color: red; font-family: sans-serif; background: #fff;">
      <h2>Mount Crash</h2>
      <pre style="white-space: pre-wrap; background: #fee; padding: 12px; border-radius: 4px;">${err?.stack || err?.message || String(err)}</pre>
    </div>`;
  }
}


