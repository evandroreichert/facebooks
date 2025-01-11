import React, { useState } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BuscarECadastrarLivros from '../components/BuscarECadastrarLivros'

const Home = () => {

    const [searchQuery, setSearchQuery] = useState('')
  
    return (
    <div>
    <div className="min-h-screen bg-[#e2e2e2]">
    <Header setSearchQuery={setSearchQuery}/>
    <HeroSection/>
    </div>     
     <BuscarECadastrarLivros searchQuery={searchQuery}/>
    </div>
  )
}

export default Home
