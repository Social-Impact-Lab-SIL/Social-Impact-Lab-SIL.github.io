import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PublicationsArchive from './pages/PublicationsArchive';
import DataRepository from './pages/DataRepository';
import HearingData from './pages/HearingData';
import TobaccoData from './pages/TobaccoData';
import DashboardsHome from './pages/DashboardsHome';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<PublicationsArchive />} />
            <Route path="/data" element={<DataRepository />} />
            <Route path="/data/hearing" element={<HearingData />} />
            <Route path="/data/tobacco" element={<TobaccoData />} />
            <Route path="/dashboards" element={<DashboardsHome />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}