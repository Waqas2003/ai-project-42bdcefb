import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;