// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import AIFeatures from './components/AIFeatures';
import Workflow from './components/Workflow';
import Plans from './components/Plans';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <AIFeatures />
        <Workflow />
        <Plans />
        <DemoSection />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
