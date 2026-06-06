import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DestinationsList from './pages/DestinationsList';
import DestinationDetail from './pages/DestinationDetail';
import TravelTips from './pages/TravelTips';
import TravelBlog from './pages/TravelBlog';
import Favorites from './pages/Favorites';
import './App.css';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationsList />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/travel-tips/:articleId" element={<TravelTips />} />
          <Route path="/blog" element={<TravelBlog />} />
          <Route path="/blog/:articleId" element={<TravelBlog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <AppContent />
      </Router>
    </FavoritesProvider>
  );
}

export default App;