import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../context/useApp';
import { fetchDestinationById } from '../utils/api';
// import MapView from '../components/destination/MapView';
// import PostsList from '../components/destination/PostsList';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Destination = () => {
  const { id } = useParams();
  const { getDestinationById } = useApp();
  const [destination, setDestination] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDestination();
  });

  const loadDestination = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // First check if destination is already in context
      const cachedDestination = getDestinationById(id);
      if (cachedDestination) {
        setDestination(cachedDestination);
        if (cachedDestination.categories.length > 0) {
          setSelectedCategory(cachedDestination.categories[0]);
        }
      } else {
        // Fetch from API if not in context
        const destinationData = await fetchDestinationById(id);
        setDestination(destinationData);
        if (destinationData.categories.length > 0) {
          setSelectedCategory(destinationData.categories[0]);
        }
      }
    } catch (err) {
      setError('Failed to load destination');
      console.error('Error loading destination:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !destination) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">
            {error || 'Destination not found'}
          </div>
          <button 
            onClick={loadDestination}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.name}</h1>
            <p className="text-xl max-w-2xl mx-auto">{destination.description}</p>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {destination.categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition duration-300 ${
                  selectedCategory?._id === category._id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="lg:sticky lg:top-24 h-96 lg:h-[600px]">
            <MapView 
              categories={destination.categories} 
              selectedCategory={selectedCategory}
            />
          </div>

          {/* Posts Section */}
          <div>
            {selectedCategory && (
              <PostsList 
                category={selectedCategory}
                destinationName={destination.name}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;