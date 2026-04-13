import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Employee from './Components/Employee/Employee'

const App = () => {
  return (
    <>
   <div className='min-h-screen w-full flex flex-col'>
    <Navbar/>
    <div className='flex-1'>
      
    </div>
    <Footer />
   </div>
    </>
  )
}

export default App