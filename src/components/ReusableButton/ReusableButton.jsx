import React from 'react'
import PropTypes from 'prop-types'

const ReusableButton = ({children = 'Default',height,padding_x}) => {
  return (
    <button style={{
        height:height,
        padding:`0 ${padding_x}`
    }} className='btn rounded-[1.875rem] font-medium font-work-sans text-green-900 hover:bg-gre bg-green-5 border-none hover:bg-green-5'>{children}</button>
  )
}

ReusableButton.propTypes = {}

export default ReusableButton