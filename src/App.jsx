
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Main from './components/Main'
import Admin from './components/Admin'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'

function App() {
  

  return (
    <>
      
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/admin' element={<Main child={<Admin/>}/>}/>
        <Route path='/product' element={<Main child={<Product/>}/>}/>
        <Route path='/details' element={<Main child={<ProductDetails/>}/>}/>
      </Routes>
    </>
  )
}

export default App
