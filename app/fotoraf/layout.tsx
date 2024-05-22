import React from 'react'

interface IFotoraf {
    children: React.ReactNode;
  }

const FotorafLayout = ({children}: IFotoraf) => {
  return (
    <div>{children}</div>
  )
}

export default FotorafLayout