import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from "../src/components/Login"
import SignUp from './components/SignUp'
import ProtectedTable from './components/ProtectedTable'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
function App() {

  return (
    <>    
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/user/protected/route" element={<ProtectedRoute><ProtectedTable /></ProtectedRoute>} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
