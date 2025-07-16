import React from 'react';
import { MapPin, Phone, Mail, Star, Bed, Home, Users, Wifi } from 'lucide-react';
import { Accommodation } from '../types/accommodation';

interface PropertyCardProps {
  property: Accommodation;
  onGetDirections: (property: Accommodation) => void;
  onContact: (property: Accommodation) => void;
}

export default function PropertyCard({ property, onGetDirections, onContact }: PropertyCardProps) {
  const getAvailabilityStatus = () => {
    if (property.type === 'house') return null;
    
    const available = property.availableBeds || 0;
    const total = property.totalBeds || 0;
    const percentage = (available / total) * 100;
    
    if (available === 0) return { label: 'Full', color: 'text-red-600 bg-red-50' };
    if (percentage <= 20) return { label: 'Limited', color: 'text-orange-600 bg-orange-50' };
    return { label: 'Available', color: 'text-green-600 bg-green-50' };
  };

  const availabilityStatus = getAvailabilityStatus();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full uppercase">
            {property.type === 'pg' ? 'PG' : property.type}
          </span>
        </div>
        {availabilityStatus && (
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${availabilityStatus.color}`}>
              {availabilityStatus.label}
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{property.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{property.rating}</span>
            <span className="ml-1 text-sm text-gray-400">({property.reviews})</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-gray-900">
              {property.currency}{property.price.toLocaleString()}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </span>
          </div>

          {/* Property specific details */}
          {property.type === 'house' && (
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-1" />
                <span>{property.bedrooms}BHK</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{property.isIndependent ? 'Independent' : 'Shared'}</span>
              </div>
              <span>{property.area} sqft</span>
            </div>
          )}

          {(property.type === 'pg' || property.type === 'hostel') && (
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{property.availableBeds}/{property.totalBeds} beds</span>
              </div>
              <span>{property.roomTypes?.join(', ')}</span>
            </div>
          )}
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {property.amenities.slice(0, 4).map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
              >
                {amenity === 'WiFi' && <Wifi className="h-3 w-3 mr-1" />}
                {amenity}
              </span>
            ))}
            {property.amenities.length > 4 && (
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md">
                +{property.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => onGetDirections(property)}
            className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <MapPin className="h-4 w-4 mr-1" />
            Directions
          </button>
          <button
            onClick={() => onContact(property)}
            className="flex-1 flex items-center justify-center px-3 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <Phone className="h-4 w-4 mr-1" />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}