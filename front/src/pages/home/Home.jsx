import React from 'react'
import Featured from '../../sections/featured/Featured'
import { Helmet } from 'react-helmet-async'
import Slider from '../../sections/Slider/Slider'
import Our from '../../sections/Our/Our'

function Home() {
  return (
    <div>
      <Helmet>
        <title>home</title>
      </Helmet>
      <Slider/>
      <Featured/>
      <Our/>
    </div>
  )
}

export default Home