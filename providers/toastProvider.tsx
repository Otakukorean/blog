import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastProvider = () => {
  return (
   <ToastContainer className={'z-[9999999999]'} />
  )
}

export default toastProvider