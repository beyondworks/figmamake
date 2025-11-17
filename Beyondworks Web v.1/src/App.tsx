import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';
import Project6 from './pages/Project6';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ConcurrentUsersBanner from './components/ConcurrentUsersBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/1" element={<Project1 />} />
        <Route path="/project/2" element={<Project2 />} />
        <Route path="/project/3" element={<Project3 />} />
        <Route path="/project/4" element={<Project4 />} />
        <Route path="/project/5" element={<Project5 />} />
        <Route path="/project/6" element={<Project6 />} />
      </Routes>
    </Router>
  );
}