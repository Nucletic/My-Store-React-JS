import React from 'react'
import { OfferBar } from './OfferBar';
import { Header } from './Header';
import { Filter } from './Filter';
import { Products } from './Products';
import { Footer } from './Footer';


export const Body = (index) => {
  return (
    <div className="container">
      <OfferBar />
      <Header />
      <Filter />
      <Products />
      <Footer />
    </div>
  )
}
