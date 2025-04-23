
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Main from './components/Main'
import Admin from './components/Admin'

function App() {
  

  return (
    <>
      
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/admin' element={<Main child={<Admin/>}/>}/>
      </Routes>
    </>
  )
}

export default App
