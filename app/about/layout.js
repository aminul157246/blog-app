import React from 'react'
import Link from 'next/link';


export default function AboutLayout({children}) {
  return (
    <div>
        <nav className="flex">
          <ul className=" ">
            <li><Link href='/about/mission'>Mission</Link></li>
            <li>Vision</li>
            <hr/>
          </ul>
          </nav>
        {children}
    </div>
  )
}
