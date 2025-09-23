
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import TheStory from './pages/TheStory';
import Menu from './pages/Menu';
import OurStory from './pages/OurStory';
import Album from './pages/Album';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-gradient-to-b from-gray-900 via-stone-200 to-[#cc5500] text-gray-800 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/the-story" element={<TheStory />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/album" element={<Album />} />
            <Route path="*" element={<Welcome />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
