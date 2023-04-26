import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
// import AuthProvider from './components/AuthProvider/AuthProvider'
import router from './components/Routes/Routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider>
      <div className='font-serif'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider> */}
    <div className='font-serif'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode >
);