import React, { useContext, useEffect, useState } from 'react'
import "./featured.scss"
import { WishlistContext } from '../../context/wishlistContext'
import { NavLink } from 'react-router-dom'
function Featured() {
  const { addToWish, isWishlist } = useContext(WishlistContext)
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3100/")
      const api = await response.json()
      setData(api)
    }
    fetchData()
  },[])

  return (
    <div className='Featured'>{data.map((item) => {
      return (
        <div className='FeaturedCard' key={item._id}>
          <div className='FeaturedImg'>
            <img className='FeaturedImage' src={item.image} alt="" />
            <div className="iconDiv"onClick={()=>addToWish(item)}><i className={`fa-solid fa-heart ${isWishlist(item) ? "red" : ""}`}></i></div>
          </div>
          <div className='FeaturedName'>
            <p>{item.name}</p>
          </div>
          <div className='FeaturedPrice'>
            <p>${item.price}</p>
          </div>
          <div >
            <NavLink to={/detail/+item._id}><button className='buttonDetail'>detail</button></NavLink>
          </div>

        </div>
      )
    })}

    </div>
  )
}

export default Featured