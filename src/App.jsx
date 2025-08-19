import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Form from './components/Form'
import Application from './components/Application'
import Support from './components/Support'
import Bookings from './components/Bookings'
import Property from './components/Property'

const App = () => {
  return (
  <>
  <Navbar/>
  <Routes>


<Route path='/' element ={<Home/>} />
<Route path='/application' element ={<Application/>} />
<Route path='/property' element ={<Property/>} />
<Route path='/bookings' element ={<Bookings/>} />
<Route path='/support' element ={<Support/>} />
<Route path='/form' element ={<Form/>} />

  </Routes>
  </>
  )
}

export default App