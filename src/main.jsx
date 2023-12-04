import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextprovider } from './context/AuthContext.jsx'
import { ChatContextProvider } from './context/ChatContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextprovider>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </AuthContextprovider>

)
