import React from 'react'

const Button = ({onClickHandler, value, title}) => {
  return (
    <button onClick={onClickHandler} value={value} className={ `px-4 text-sm py-1 border text-base hover:bg-primary hover:text-yellow`}>{title}</button>
  )
}

export default Button