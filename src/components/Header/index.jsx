import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-viva-decora.png'
import { MenuIcon } from '../Icons'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-center mx-auto lg:flex lg:flex-col ">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 mx-3 text-sm text-white md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon />
        </button>

        <Link to="/">
          <img src={logo} className="h-7 mr-3 sm:h-9" alt="Vivadecora Logo" />
        </Link>

        <div
          className={
            'w-full md:block md:w-auto' + (navbarOpen ? ' block' : ' hidden')
          }
          id="navbar-default"
        >
          <ul
            className="flex flex-col p-4 mt-4 border border-gray-100 
          md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium 
          md:border-0 dark:border-gray-700"
          >
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white rounded 
                hover:bg-gray-700 md:hover:bg-transparent md:border-0 
                md:p-0 dark:text-gray-400 md:dark:hover:text-white 
                dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent"
              >
                Filmes não curados
              </Link>
            </li>
            <li>
              <Link
                to="/curtidos"
                className="block py-2 pl-3 pr-4 text-white rounded 
                hover:bg-gray-700 md:hover:bg-transparent md:border-0 
                md:p-0 dark:text-gray-400 md:dark:hover:text-white 
                dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent"
              >
                Filmes curtidos
              </Link>
            </li>
            <li>
              <Link
                to="/nao_curtidos"
                className="block py-2 pl-3 pr-4 text-white rounded 
                hover:bg-gray-700 md:hover:bg-transparent md:border-0 
                md:p-0 dark:text-gray-400 md:dark:hover:text-white 
                dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent"
              >
                Filmes não curtidos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
