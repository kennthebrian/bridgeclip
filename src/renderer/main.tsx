import './components/clip-editor.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { isMac } from './lib/utils'
import './globals.css'

// macOS windows have native vibrancy; the backdrop turns translucent over it.
if (isMac) document.documentElement.classList.add('vibrant')

if (typeof window !== 'undefined' && !window.bridgeclip) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#07080c', color: '#f3f4f6', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.75rem' }}>BridgeClip Desktop Application</h1>
      <p style={{ maxWidth: '500px', lineHeight: 1.6, color: '#9ca3af', marginBottom: '1.5rem' }}>
        BridgeClip runs as a native desktop application with local file system and FFmpeg access. It cannot be controlled directly from a standard web browser tab.
      </p>
      <div style={{ backgroundColor: '#13151c', border: '1px solid #27272a', borderRadius: '8px', padding: '1rem 1.5rem', fontSize: '0.9rem', color: '#d4d4d8' }}>
        Look for the <strong>BridgeClip</strong> window in your Windows taskbar or press <strong>Alt + Tab</strong>.
      </div>
    </div>
  )
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
