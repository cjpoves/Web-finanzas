import { useState } from 'react'
import './App.css'
import { RoutesApp } from './routes/RoutesApp'

function App() {

  return (
    <>
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Fondo SVG */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1, // Asegura que el SVG esté por debajo de otros elementos
        }}
      >
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#28263B" />
            <stop offset="50%" stop-color="#151724" />
            <stop offset="100%" stop-color="#151724" />
          </radialGradient>
        </defs>
        
        {/* Fondo con el degradado radial */}
        <rect width="100%" height="100%" fill="url(#grad)" />
        
        {/* Círculos Concéntricos con bordes blancos y transparencia */}
        <circle cx="50%" cy="50%" r="10%" stroke="white" stroke-width="3" fill="none" opacity="0.1" className="circle-animation" />
        <circle cx="50%" cy="50%" r="30%" stroke="white" stroke-width="1.5" fill="none" opacity="0.1" className="circle-animation"/>
        <circle cx="50%" cy="50%" r="40%" stroke="white" stroke-width="1.5" fill="none" opacity="0.1" className="circle-animation"/>
        <circle cx="50%" cy="50%" r="50%" stroke="white" stroke-width="0.8" fill="none" opacity="0.1" className="circle-animation"/>
        <circle cx="50%" cy="50%" r="60%" stroke="white" stroke-width="0.6" fill="none" opacity="0.1" className="circle-animation"/>
        <circle cx="50%" cy="50%" r="80%" stroke="white" strokeWidth="1.5" fill="none" opacity="0.1" className="circle-animation" />
        <circle cx="50%" cy="50%" r="110%" stroke="white" strokeWidth="1" fill="none" opacity="0.1" className="circle-animation" />
        <circle cx="50%" cy="50%" r="130%" stroke="white" strokeWidth="1" fill="none" opacity="0.1" className="circle-animation" />
        <circle cx="50%" cy="50%" r="150%" stroke="white" strokeWidth="1" fill="none" opacity="0.1" className="circle-animation" />
        <circle cx="50%" cy="50%" r="170%" stroke="white" strokeWidth="1" fill="none" opacity="0.1" className="circle-animation" />
      
      </svg>

      <RoutesApp/>
      </div>
    </>
  )
}

export default App
