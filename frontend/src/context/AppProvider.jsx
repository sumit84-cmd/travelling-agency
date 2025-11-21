import React, { useState, useEffect } from 'react';
import { fetchDestinations } from '../utils/api';
import { AppContext } from './AppContext';

// Provider component only
const AppProvider = ({ children }) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDestinationsData();
  }, []);

  const fetchDestinationsData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchDestinations();
      setDestinations(data);
    } catch (err) {
      setError('Failed to fetch destinations');
      console.error('Error fetching destinations:', err);
    } finally {
      setLoading(false);
    }
  };

  const getDestinationById = (id) => {
    return destinations.find(dest => dest._id === id) || null;
  };

  const getCategoryById = (destinationId, categoryId) => {
    const destination = getDestinationById(destinationId);
    if (!destination) return null;
    
    return destination.categories.find(cat => cat._id === categoryId) || null;
  };

  const value = {
    destinations,
    loading,
    error,
    fetchDestinations: fetchDestinationsData,
    getDestinationById,
    getCategoryById
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;