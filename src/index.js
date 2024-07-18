import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ReactQueryProvider } from 'providers/QueryProvider'
import { ModalContextProvider } from 'Context/ModalContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ReactQueryProvider>
    <React.StrictMode>
      <ModalContextProvider>
        <Router>
          <App />
        </Router>
      </ModalContextProvider>
    </React.StrictMode>
  </ReactQueryProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
