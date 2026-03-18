import React from 'react'
import "./header.css"

type headerProps={
    title: string
}

const Header :React.FC<headerProps> = ({title}) => {
  return (
    <div  className="header">
        <h1>{title}</h1>
    </div>
  )
}

export default Header