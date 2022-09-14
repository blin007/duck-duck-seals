import React from 'react'
import Link from 'next/link'

const Nav = ({ navData, header }) => {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-x-[40px]'>
        {navData.map((item, i) => {
          return (
            <li key={i}>
              <Link href={item.href}>
                <a className={`${header ? 'text-scrollHeader hover:text-accent-hover' : 'text-headerText hover:text-accent-hoverHead'}
                cursor-pointer transition`}>
                  {item.name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav