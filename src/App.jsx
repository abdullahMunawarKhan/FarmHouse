import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EstateIntro from './components/EstateIntro';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Experiences from './components/Experiences';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './index.css';

const VillaScene = lazy(() => import('./components/VillaScene'));

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <HeroSection />
        <EstateIntro />
        <Suspense fallback={<img src="https://via.placeholder.com/800x600?text=Villa+Scene+Loading" alt="Villa scene loading" className="w-full max-w-4xl" />}>
          <VillaScene />
        </Suspense>
        <Amenities />
        <Gallery />
        <Experiences />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
