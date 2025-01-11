import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BuscarECadastrarLivros from '../components/BuscarECadastrarLivros'

const Home = () => {
  return (
    <div>
    <div className="min-h-screen bg-[#e2e2e2]">
    <Header/>
    <HeroSection/>
    </div>     
     <BuscarECadastrarLivros/>
    </div>
  )
}

export default Home
