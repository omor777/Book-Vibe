import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Root = props => {
  return (
    <>
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    <ToastContainer />
    </>
  )
}

Root.propTypes = {}

export default Root