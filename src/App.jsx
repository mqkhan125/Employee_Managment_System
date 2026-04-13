import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import EmployeeLists from './Components/Employees/EmployeeLists'

const App = () => {
  return (
    <>
   <div className='min-h-screen w-full flex flex-col'>
    <Navbar/>
    <div className='flex-1'>
      <EmployeeLists />
    </div>
    <Footer />
   </div>
    </>
  )
}

export default App