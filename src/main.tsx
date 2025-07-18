/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
import './index.css'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './app'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
