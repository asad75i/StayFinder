import React from 'react';
import { X, Navigation, MapPin } from 'lucide-react';
import { Accommodation } from '../types/accommodation';

interface MapModalProps {
  property: Accommodation | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MapModal({ property, isOpen, onClose }: MapModalProps) {
  if (!isOpen || !property) return null;

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${property.coordinates.lat},${property.coordinates.lng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  const openInAppleMaps = () => {
    const url = `http://maps.apple.com/?daddr=${property.coordinates.lat},${property.coordinates.lng}&dirflg=d`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Directions to {property.title}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h4>
                <p className="text-gray-600 mb-4">{property.address}</p>
                <div className="text-sm text-gray-500">
                  <p>Latitude: {property.coordinates.lat}</p>
                  <p>Longitude: {property.coordinates.lng}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={openInGoogleMaps}
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <Navigation className="h-5 w-5 mr-2" />
                Open in Google Maps
              </button>

              <button
                onClick={openInAppleMaps}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <Navigation className="h-5 w-5 mr-2" />
                Open in Apple Maps
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Choose your preferred map application to get turn-by-turn directions
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}