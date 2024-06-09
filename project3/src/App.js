import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Blog from './components/blog';
import Header from './components/header';
import Footer from './components/footer';
import theme from './theme'; 
import './index.css'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <div style={{ flex: 1 }}> {}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
