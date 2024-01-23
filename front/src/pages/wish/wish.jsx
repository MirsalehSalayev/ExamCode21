import React, {  useContext } from 'react'
import { WishlistContext } from '../../context/wishlistContext'
import { Helmet } from 'react-helmet-async'

function Wish() {
const {wish,addToWish, isWishlist } =useContext(WishlistContext)
return (

    <>
    <Helmet>
      <title>add</title>
    </Helmet>
    <div className='Featured'>{wish.map((x)=>{
      return(
        <div className='FeaturedCard' key={x._id}>
          <div className='FeaturedImg'>
            <img className='FeaturedImage' src={x.image} alt="" />
            {/* <i className={`fa-solid fa-heart ${isWishlist(x) ? "red" :""}  `}></i> */}
          </div>
          <div className='FeaturedName'>
            <p>{x.name}</p>
          </div>
          <div className='FeaturedPrice'>
            <p>{x.price}</p>
          </div>
          <div onClick={()=>addToWish(x)}><i className={`fa-solid fa-heart ${isWishlist(x) ? "red" : ""}`}></i></div>

        </div>
      )
      })}

    </div>
    </>
  )
}

export default Wish