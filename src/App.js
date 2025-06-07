import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Preise from './pages/Preise';
import About from './pages/About';
import Footer from './components/Footer';
import Gallerie from './pages/Photos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/über-uns" element={<About />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/gallerie" element={<Gallerie />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
