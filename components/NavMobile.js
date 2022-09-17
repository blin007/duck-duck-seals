import React from 'react'

import Link from 'next/link'

const NavMobile = ({ navData }) => {
  return (
    <nav className='bg-accent p-[10px]'>
      <ul className='flex flex-col gap-y-[10px]'>
        {navData.map((item, i) => {
          return (
            <li key={i}>
              <Link href={`#${item.href}`}>
                <a className='text-white hover:text-accent-hover'>
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

export default NavMobile