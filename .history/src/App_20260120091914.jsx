import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/guest/NavBar'
import Hero from './components/guest/Hero'
import Event from './components/guest/Event'
import News from './components/guest/News'
import Layout from './components/guest/Layout'
import Home from './components/guest/Home'
import Admission from './components/guest/Admission'
import Academic from './components/guest/Academic'
import About from './components/guest/About'
import LayOut from './components/admin/LayOut'
import Dashboard from './components/admin/pages/Dashboard'
import Login from './components/guest/forms/Login'
import ResetPassword from './components/guest/forms/ResetPassword'
import Primary from './components/guest/primary'


function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/admissions' element={<Admission />} />
      <Route path='/academic' element={<Academic />} />
      <Route path='/aboutus' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path="/password-reset" element={<ResetPassword />} />
      <Route path='/primary' element={<Primary />} />
      </Route>

      <Route path='/admin' element={<LayOut />}>
      <Route index element={<Dashboard />} />
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
