
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </>
  )
}

export default App
