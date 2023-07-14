import React from 'react';
import Header from './components/Header/Header';
import HeroHeadline from "./components/HeroHeadline/HeroHeadline";
import OurClients from './components/OurClients/OurClients';
import Services from "./components/Services/Services";
import GreatSince from "./components/GreatSince/GreatSince";
function App() {
  return (
    <>
      <Header />
      <HeroHeadline />
      <OurClients />
      <Services />
      <GreatSince />
    </>
  );
}

export default App;
