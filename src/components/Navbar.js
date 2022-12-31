import React from 'react'
import { Link } from 'react-router-dom';
// import propTypes from 'prop-types'
export default function Navbar(props) {

  return (
    <>
<nav className= {`flex flex-wrap navbar:light border-black items-center justify-between p-6 bg-${props.mode}`}>
  <div className="flex items-center flex-shrink-0 mr-6 text-white">
    <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="text-xl font-semibold tracking-tight text-teal-400">{props.title}</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 text-teal-400 border border-teal-600 rounded hover:text-teal-300 hover:border-white">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to="/" className="block mt-4 mr-4 text-teal-400 lg:inline-block lg:mt-0 hover:text-teal-300">
        {props.Docs}
      </Link>
      <Link to="/about" className="block mt-4 mr-4 text-teal-400 lg:inline-block lg:mt-0 hover:text-teal-300">
        About
      </Link>
     
    </div>
    <div>
    <label className="relative inline-flex items-center mb-5 cursor-pointer">
  <input onClick={props.toggleBtn} type="checkbox" value="" className="sr-only peer"/>
  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
    </div>
  </div>
</nav>  
</>
)


  
}

// Navbar.propTypes = {
//     title:propTypes.string.isRequired,
//     aboutText: propTypes.string.isRequired
// }
Navbar.defaultProps = {
    title:'set title',
    Docs:'set about text'
};