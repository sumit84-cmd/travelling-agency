import axios from 'axios';
import { API_BASE_URL } from '../constants/apiConstants';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchDestinations = async () => {
  try {
    const response = await api.get('/destinations');
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};

export const fetchDestinationById = async (id) => {
  try {
    const response = await api.get(`/destinations/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching destination:', error);
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};