import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

function Detail() {
  const {id} =useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3100/"+id)
      const api = await response.json()
      setData(api)
    }
    fetchData()
  },[])
  return (
    <div className='Featured'>
      <Helmet>
      <title>add</title>
    </Helmet>
        <div className='FeaturedCard' key={data._id}>
          <div className='FeaturedImg'>
            <img className='FeaturedImage' src={data.image} alt="" />
          </div>
          <div className='FeaturedName'>
            <p>{data.name}</p>
          </div>
          <div className='FeaturedPrice'>

            <p>{data.price}</p>
          </div>
         

        </div>
    

    </div>
  )
}

export default Detail