import React from 'react';
import Header from './components/Header/Header';
import HeroHeadline from "./components/HeroHeadline/HeroHeadline";
import OurClients from './components/OurClients/OurClients';
import Services from "./components/Services/Services";
import GreatSince from "./components/GreatSince/GreatSince";
import ClientsReview from "./components/ClientsReview/ClientsReview";
import NewsLetter from "./components/NewsLetter/NewsLetter"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
      <Header />
      <HeroHeadline />
      <OurClients />
      <Services />
      <GreatSince />
      <ClientsReview />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
