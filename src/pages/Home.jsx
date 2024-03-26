import React from 'react'
import Info from '../components/info/Info'
import PopularItems from '../components/popularitems/PopularItems'
import Products from '../components/products/Products'
import Sale from '../components/sale/Sale'
import Sidebar from '../components/sidebar/Sidebar'
import Slider from '../components/slider/Slider'

const Home = () => {
  return (
    <div >
      <Slider/>
      <Sidebar/>
      <Info/>
      <Products/>
      <Sale/>
      <PopularItems/>
    </div>
  )
}

export default Home