import React from 'react'

interface IAlive {
    children: React.ReactNode;
  }

const AliveLayout = ({children}: IAlive) => {
  return (
    <div>{children}</div>
  )
}

export default AliveLayout