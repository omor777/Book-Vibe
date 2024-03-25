import React from 'react'
import PropTypes from 'prop-types'

const Button =( {children,bgColor} )=> {
  return (
    <button style={{
        backgroundColor:bgColor
    }} className='btn text-white px-7 h-[3.5625rem] text-lg font-semibold font-work-sans'>{children}</button>
  )
}

Button.propTypes = {}

export default Button