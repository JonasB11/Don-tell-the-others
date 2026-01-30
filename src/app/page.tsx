'use client';

import { useCallback } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BandSection from '../components/BandSection';
import Gallery from '../components/Gallery';
import TourSection from '../components/TourSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <>
      <Navbar onNavigate={scrollToSection} />
      <main>
        <Hero onNavigate={scrollToSection} />
        <BandSection />
        <Gallery />
        <TourSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
