import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Hero from './components/common/Hero';
import AboutPage from './view/AboutPage';
import HomePage from './view/HomePage';
import CommonHeading from './components/common/CommonHeading';
import CommonPara from './components/common/CommonPara';

function App() {
  return (
    <>
      <BrowserRouter>
        <Hero />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <CommonHeading />
      <CommonPara />
    </>
  );
}

export default App;