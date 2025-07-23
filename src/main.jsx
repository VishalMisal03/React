import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './List1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <List/>
  </StrictMode>,
)
