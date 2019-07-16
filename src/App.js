import React from 'react';
import { Footer } from './components/Footer/Footer.js'
import { Header } from './components/Header/Header.js'
import './App.css';
import { AboutContainer } from './containers/AboutContainer';

function App() {
  return (
    <div>
      <Header />
      <AboutContainer />
      <Footer />
    </div>
  )
}

export default App;
