import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Root = props => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

Root.propTypes = {}

export default Root