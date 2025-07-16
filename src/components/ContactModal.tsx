import React from 'react';
import { X, Phone, Mail, MapPin, Star, Wifi, Car, Shield } from 'lucide-react';
import { Accommodation } from '../types/accommodation';

interface ContactModalProps {
  property: Accommodation | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ property, isOpen, onClose }: ContactModalProps) {
  if (!isOpen || !property) return null;

  const getIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'parking': return <Car className="h-4 w-4" />;
      case 'security': return <Shield className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900" id="modal-title">
                Contact Details
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{property.title}</h4>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{property.rating}</span>
                  <span className="ml-1 text-sm text-gray-400">({property.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                <div>
                  <p className="text-sm text-gray-900">{property.address}</p>
                  <p className="text-sm text-gray-500">{property.location}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h5 className="text-sm font-medium text-gray-900 mb-3">Contact Information</h5>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                    <a
                      href={`tel:${property.contactPhone}`}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {property.contactPhone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-3" />
                    <a
                      href={`mailto:${property.contactEmail}`}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {property.contactEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h5 className="text-sm font-medium text-gray-900 mb-3">Amenities</h5>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <span className="text-gray-400 mr-2">
                        {getIcon(amenity) || <span className="h-4 w-4 block">•</span>}
                      </span>
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Monthly Rent</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {property.currency}{property.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <a
              href={`tel:${property.contactPhone}`}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
            >
              Call Now
            </a>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}