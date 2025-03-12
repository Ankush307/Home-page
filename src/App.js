import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './components/Gallery';
import DanceParty from './components/DanceParty';
import CustomDock from './components/CustomDock';
import Services from './components/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DanceParty />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path='dock' element={<CustomDock />} />
          <Route path='mac' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;