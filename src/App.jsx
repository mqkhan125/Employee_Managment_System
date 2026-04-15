import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import EmployeeLists from './Components/Employees/EmployeeLists'
import EmployessPopup from './Components/Employees/EmployessPopup'
import EmployeeDeletePopus from './Components/Employees/EmployeeDeletePopup'

const App = () => {
  return (
    <>
    <div data-theme="dark" className='min-h-screen w-full flex flex-col bg-base-200'>
      <EmployeeDeletePopus />
      <EmployessPopup />
      <Navbar/>
      <div className='flex-1 py-10'>
        <EmployeeLists />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App