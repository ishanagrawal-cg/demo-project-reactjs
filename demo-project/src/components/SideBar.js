import React, { useState } from 'react'
import { FaTh, FaCalendarAlt, FaTruck, FaUserAlt, FaBars, FaRegNewspaper } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: '/',
      name: "Dashboard",
      icon: <FaTh />
    },
    // {
    //   path: '/calendar',
    //   name: "Calendar",
    //   icon: <FaCalendarAlt />
    // },
    // {
    //   path: '/addToWagon',
    //   name: "Add to Wagon",
    //   icon: <FaTruck />
    // },
    // {
    //   path: '/news',
    //   name: "News",
    //   icon: <FaRegNewspaper />
    // },
    // {
    //   path: '/about',
    //   name: "About",
    //   icon: <FaUserAlt />
    // },
  ]

  return (
    <div className='container'>
      <div style={{ width: isOpen ? "200px" : "50px" }} className='sidebar'>
        <div className='header'>
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">DemoP</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
              <div className='icon'>{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}
