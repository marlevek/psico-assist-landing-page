import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import AIFeatures from './components/AIFeatures';
import MigrationSection from './components/MigrationSection';
import Workflow from './components/Workflow';
import Plans from './components/Plans';
import TransitionCTA from './components/TransitionCTA';
import FAQSection from './components/FAQSection';
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
        <MigrationSection />
        <Workflow />
        <Plans />
        <TransitionCTA />
        <FAQSection />
        <DemoSection />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
