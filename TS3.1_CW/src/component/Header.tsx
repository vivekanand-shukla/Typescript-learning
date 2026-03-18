import React from 'react'
type headerProps={
    title: string
}

const Header :React.FC<headerProps> = ({title}) => {
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}

export default Header