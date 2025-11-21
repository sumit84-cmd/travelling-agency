import React from 'react';
import { useApp } from '../context/useApp';
import HeroSection from '../components/home/HeroSection';
import TopDestinations from '../components/home/TopDestinations';
// import DestinationCategories from '../components/home/DestinationCategories';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home = () => {
  const { destinations, loading, error } = useApp();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ {error}</div>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <HeroSection destinations={destinations} />
      <TopDestinations destinations={destinations} />
      <DestinationCategories destinations={destinations} />
    </div>
  );
};

export default Home;