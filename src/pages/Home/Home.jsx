import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Gallery from '../../components/Gallery/Gallery'
import ExploreRoom from '../../components/ExploreRoom/ExploreRoom'
import ExploreBedroom from '../../components/ExploreBedroom/ExploreBedroom'
import BeedromDisplay from '../../components/BeedromDisplay/BeedromDisplay'
import Recomendations from '../../components/Recomendations/Recomendations'

const Home = () => {

  const [category,setCategory] = useState("All")
  const [categoryBedroom,setCategoryBedroom] = useState("All")


  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      <ExploreBedroom setCategory={setCategoryBedroom} category={categoryBedroom}/>
      <BeedromDisplay category={categoryBedroom}/>
      <ExploreRoom />
      <Recomendations/>
      <AppDownload/>
    </>
  )
}

export default Home
