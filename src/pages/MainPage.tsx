import React from 'react'
import { Header } from '../components/Header'
import { MainPageContent } from '../components/MainPageContent'
import { Footer } from '../components/Footer'

export const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <MainPageContent />
      <Footer />
    </React.Fragment>
  )
}
