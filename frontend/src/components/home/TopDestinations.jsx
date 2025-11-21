import React from 'react';
import { Link } from 'react-router-dom';

const TopDestinations = ({ destinations }) => {
  const topDestinations = destinations.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Top Destinations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our most popular travel destinations in India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topDestinations.map((destination) => (
            <Link
              key={destination._id}
              to={`/destination/${destination._id}`}
              className="destination-card group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-80">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                      {destination.categories.length} Places
                    </span>
                    <span className="text-yellow-400">⭐ {destination.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;