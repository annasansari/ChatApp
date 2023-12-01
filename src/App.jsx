import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import { onAuthStateChanged, getAuth, auth, doc, getDoc, db } from './firebase/firebase.js'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthContext.jsx'

function App() {

  const { currentUser } = useContext(AuthContext)

  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={'/signin'} />
    }
    return children
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>}
            />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
