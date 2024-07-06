import Link from 'next/link'
import React from 'react'

const MobileNavigationLink = ({href, text, onClick}: any) => {
  return (
    <Link href={href} className="my-4 bg-primary text-secondary border border-secondary font-bold w-full flex justify-center items-center p-4" onClick={onClick}>{text}</Link>
  )
}

export default MobileNavigationLink