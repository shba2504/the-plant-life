import React from 'react'
import './App.css'
import '@ionic/react/css/core.css';
import { Navbar } from './components/Navbar'
import {Header} from "./components/Header"
import {PlantJourney} from "./components/PlantJourney"
import {NewArrivals} from "./components/NewArrivals"
import {FeatureSucc} from "./components/FeatureSucc"
import {Planters} from "./components/Planters"
import {Bestsellers} from "./components/Bestsellers"
import {FeatureFlow} from "./components/FeatureFlow"
import {WhyUs} from "./components/WhyUs"
import {HomeDecor} from "./components/HomeDecor"
import {Newsletter} from "./components/Newsletter"
import {Footer} from "./components/Footer"
import { setupIonicReact } from '@ionic/react';

setupIonicReact();

function App() {
  return (
    <>
     <Navbar />
     <Header />
     <PlantJourney />
     <NewArrivals />
     <FeatureSucc />
     <Planters />
     <Bestsellers />
     <FeatureFlow />
     <WhyUs />
     <HomeDecor />
     <Newsletter />
     <Footer />
    </>
  )
}

export default App
