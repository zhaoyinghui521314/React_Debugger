// import React from 'react'
import * as React from 'react'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root'));
console.log("root:", root);
debugger;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <StrictMode>
  //   <App />
  // </StrictMode>
)
