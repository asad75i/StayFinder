import React from 'react';
import { Filter, X } from 'lucide-react';
import { FilterOptions } from '../types/accommodation';
import { locations, amenitiesList } from '../data/mockData';

interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FilterPanel({ filters, onFiltersChange, isOpen, onToggle }: FilterPanelProps) {
  const handleTypeChange = (type: string) => {
    const newTypes = filters.type.includes(type)
      ? filters.type.filter(t => t !== type)
      : [...filters.type, type];
    onFiltersChange({ ...filters, type: newTypes });
  };

  const handleAmenityChange = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    onFiltersChange({ ...filters, amenities: newAmenities });
  };

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Filter className="h-4 w-4 mr-2" />
        Filters
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden" onClick={onToggle} />
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 border border-gray-200">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                <button onClick={onToggle} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Property Type</h4>
                <div className="space-y-2">
                  {['pg', 'hostel', 'house'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={() => handleTypeChange(type)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">{type === 'pg' ? 'PG' : type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Price Range (₹)</h4>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceRange[0]}
                    onChange={(e) => onFiltersChange({
                      ...filters,
                      priceRange: [Number(e.target.value), filters.priceRange[1]]
                    })}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceRange[1]}
                    onChange={(e) => onFiltersChange({
                      ...filters,
                      priceRange: [filters.priceRange[0], Number(e.target.value)]
                    })}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Location</h4>
                <select
                  value={filters.location}
                  onChange={(e) => onFiltersChange({ ...filters, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Amenities</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {amenitiesList.slice(0, 8).map((amenity) => (
                    <label key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.amenities.includes(amenity)}
                        onChange={() => handleAmenityChange(amenity)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Availability</h4>
                <select
                  value={filters.availability || 'all'}
                  onChange={(e) => onFiltersChange({ ...filters, availability: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All</option>
                  <option value="available">Available</option>
                  <option value="limited">Limited</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}