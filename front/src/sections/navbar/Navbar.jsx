import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbarHeader'>
        <div className='Icons'>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-heart"></i>
        </div>
        <div>Free shipping for standard order over $100</div>
        <div>

          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-heart"></i>
        </div>

      </div>
      <div className='navbarFoot'>
        <div className='navbarimg'>
          <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png" alt="" />
        </div >
        <div className='navbarTitles'>
          <li>
            <Link className="navroute" to="/">Home</Link>
          </li>
          <li>
            <Link className="navroute" to="/add">Add</Link>
          </li>
          <li>
            <Link className="navroute" to="/wish">wish</Link>
          </li>
          <li>
            <Link className="navroute" to="/wish">wish</Link>
          </li>
          <li>
            <Link className="navroute" to="/wish">wish</Link>
          </li>
          <li>
            <Link className="navroute" to="/wish">wish</Link>
          </li>
          <li>
            <Link className="navroute" to="/wish">wish</Link>
          </li>
        </div>
        <div className='userAndBasket'>
          <div className='user'>
            <img src="https://preview.colorlib.com/theme/fashe/images/icons/icon-header-01.png" alt="" />
          </div>
          <div className='basket'>
            <img src="https://preview.colorlib.com/theme/fashe/images/icons/icon-header-02.png" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar