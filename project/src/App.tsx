import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Hero from './components/Hero';
import AnnouncementBar from './components/AnnouncementBar';
import NewArrivals from './components/NewArrivals';
import ProductSlider from './components/ProductSlider';
import ReviewSection from './components/ReviewSection';
import Footer from './components/organisms/Footer';
import Calendar from './pages/Calendar';
import MagneticBookmarks from './pages/MagneticBookmarks';
import Bookmarks from './pages/Bookmarks';
import GiftCard from './pages/GiftCard';
import ArtPrints from './pages/ArtPrints';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NewArrivals />
              <ProductSlider />
              <ReviewSection />
            </>
          } />
          <Route path="/calendar-2025" element={<Calendar />} />
          <Route path="/magnetic-bookmarks" element={<MagneticBookmarks />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/gift-card" element={<GiftCard />} />
          <Route path="/art-prints" element={<ArtPrints />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;