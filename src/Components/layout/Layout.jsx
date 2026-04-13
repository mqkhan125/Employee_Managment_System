import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='max-w-7xl w-full m-auto p-4'>
      {children}
    </div>
  )
}

export default Layout;