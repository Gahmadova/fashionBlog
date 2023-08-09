import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      
        <Nav />
        <Article />
        {/* <Article /> */}
      
      <Footer />
    </div>
  );
}

export default App;
