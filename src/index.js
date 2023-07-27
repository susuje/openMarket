import React from 'react'
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/GlobalStyle'
import GlobalFont from './styles/GlobalFont'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <>
    <GlobalFont />
    <GlobalStyle />
    <App />
  </>
)
