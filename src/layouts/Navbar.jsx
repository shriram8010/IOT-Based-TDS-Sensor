import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className='border-b border-lime-300 h-[8vh] flex justify-between items-center p-2 sticky top-0 z-40 bg-darkbg'>
      <Link to={'/'} className="navbarBrand text-lime-300 font-semibold">
        <img src="/logo.png" alt="" className='invert h-[2.5rem]' />
      </Link>

      <ul className="navList list-none flex justify-between space-x-5">
        <li className={`navItem ${location.pathname === '/' && 'text-blue-300'} ${location.pathname !== '/' && 'hover:text-blue-200'} font-medium hover:scale-110  duration-150`}>
          <Link to={'/'}>Home</Link>
        </li>
        <li className={`navItem ${location.pathname === '/results' && 'text-blue-300'} ${location.pathname !== '/results' && 'hover:text-blue-200'} font-medium hover:scale-110  duration-150`}>
          <Link to={'/results'}>Results</Link>
        </li>
        <li className={`navItem ${location.pathname === '/knowmore' && 'text-blue-300'} ${location.pathname !== '/knowmore' && 'hover:text-blue-200'} font-medium hover:scale-110  duration-150`}>
          <Link to={'/knowmore'}>Know More</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar