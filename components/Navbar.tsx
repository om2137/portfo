import React from 'react'

export default function Navbar() {
  return (
    <div className="flex w-full flex-1 flex-col justify-top">
          <nav className="flex items-center rounded-b-lg border-b border-green-500 justify-between flex-wrap p-6 bg-slate-800 ">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <a className=" inline-block border rounded py-2 px-4 text-white font-semibold">Home</a>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" id='burger'>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              </button>
            </div>
            <div className="w-full block flex- lg:flex lg:items-center hidden lg:w-auto " id='menu'>
              <div className="text-sm lg:flex-">
                <a className="inline-block border text-sm px-4 py-2 mr-2 rounded text-white mt-4 lg:inline-block lg:mt-0 "
                    href="#project"
                >
                  Projects
                </a>
                <a className="inline-block border text-sm px-4 py-2 mr-2 rounded text-white mt-4 lg:inline-block lg:mt-0 ">
                  Examples
                </a>
                <a className="inline-block border text-sm px-4 py-2 mr-2 rounded text-white mt-4 lg:inline-block lg:mt-0 "
                    href="#blog"
                >
                  Blog
                </a>
              </div>
              <div>
                <a className="inline-block border text-sm px-4 py-2 mr-2 rounded text-white mt-4 lg:inline-block lg:mt-0 ">Resume</a>
              </div>
            </div>
          </nav>
      </div>
  )
}
