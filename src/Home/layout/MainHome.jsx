import React from 'react'
import { HomeContext, HomeProvider } from '../context/HomeContext';
import Home from './Home'

const MainHome = () => {
  return (
    <HomeProvider>
      <Home/>
    </HomeProvider>
  )
}

export default MainHome
