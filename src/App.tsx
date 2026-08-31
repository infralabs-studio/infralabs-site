// src/App.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { WhatWeDo } from './components/sections/WhatWeDo';
import { ProofOfWork } from './components/sections/ProofOfWork';
import { HowWeWork } from './components/sections/HowWeWork';
import { StudioModel } from './components/sections/StudioModel';
import { Contact } from './components/sections/Contact';
import { SplashScreen } from './components/brand/SplashScreen';
import { Careers } from './components/sections/Careers';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // While splash is active, ONLY render the splash screen.
  if (showSplash) {
    return <SplashScreen onDone={() => setShowSplash(false)} />;
  }

  // Once splash is done, smoothly fade in the main application.
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col"
    >
      <Nav />
      <main className="flex-1">
        <Hero />
        <WhatWeDo /> 
        <ProofOfWork />
        <HowWeWork />
        <StudioModel />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}