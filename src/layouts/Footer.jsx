import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()

  return (
    <footer className='border-t-2 border-t-lime-300 flex flex-col justify-evenly h-[25vh] z-40'>
      <Link to={'/'} className="navbarBrand text-lime-300 font-semibold">
        <img src="/logo.png" alt="" className='invert h-[2.5rem] mx-auto' />
      </Link>

      <ul className="navList list-none flex flex-col items-center justify-evenly">
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

      <hr />

      
    </footer>
  )
}

export default Footer