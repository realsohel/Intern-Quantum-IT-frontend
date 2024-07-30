import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from "../src/components/Login"
import SignUp from './components/SignUp'
function App() {

  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<SignUp />}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
