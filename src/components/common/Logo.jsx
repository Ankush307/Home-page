import React from 'react'
import { useLocation } from 'react-router-dom'

const Logo = () => {
    const loction = useLocation().pathname
  return (
    <div className={`${loction === "/" ? "text-5xl text-red-900 " : "text-5xl text-blue-900"}`}>Logo</div>
  )
}

export default Logo