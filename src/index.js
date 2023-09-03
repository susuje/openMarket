import React from 'react'
// import ReactDOM from 'react-dom'; //구버전

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/GlobalStyle'
import GlobalFont from './styles/GlobalFont'

const container = document.getElementById('root')
const root = createRoot(container)
const queryClient = new QueryClient()
root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalFont />
    <GlobalStyle />
    <App />
  </QueryClientProvider>
)
