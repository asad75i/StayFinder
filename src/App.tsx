import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import CategoryTabs from './components/CategoryTabs';
import PropertyCard from './components/PropertyCard';
import ContactModal from './components/ContactModal';
import MapModal from './components/MapModal';
import { accommodations } from './data/mockData';
import { Accommodation, FilterOptions } from './types/accommodation';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filters, setFilters] = useState<FilterOptions>({
    type: [],
    priceRange: [0, 50000],
    location: 'All Locations',
    amenities: [],
    availability: 'all'
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Accommodation | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const filteredAccommodations = useMemo(() => {
    return accommodations.filter((property) => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!property.title.toLowerCase().includes(query) &&
            !property.location.toLowerCase().includes(query) &&
            !property.address.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Category filter
      if (activeCategory !== 'all' && property.type !== activeCategory) {
        return false;
      }

      // Type filter
      if (filters.type.length > 0 && !filters.type.includes(property.type)) {
        return false;
      }

      // Price range filter
      if (property.price < filters.priceRange[0] || property.price > filters.priceRange[1]) {
        return false;
      }

      // Location filter
      if (filters.location !== 'All Locations' && property.location !== filters.location) {
        return false;
      }

      // Amenities filter
      if (filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every(amenity =>
          property.amenities.includes(amenity)
        );
        if (!hasAllAmenities) {
          return false;
        }
      }

      // Availability filter
      if (filters.availability && filters.availability !== 'all') {
        if (property.type === 'house') return true;
        
        const available = property.availableBeds || 0;
        const total = property.totalBeds || 0;
        const percentage = (available / total) * 100;

        if (filters.availability === 'available' && percentage <= 20) return false;
        if (filters.availability === 'limited' && (percentage > 20 || available === 0)) return false;
      }

      return true;
    });
  }, [searchQuery, activeCategory, filters]);

  const categoryCounts = useMemo(() => {
    const counts = { all: 0, pg: 0, hostel: 0, house: 0 };
    filteredAccommodations.forEach((property) => {
      counts.all++;
      counts[property.type]++;
    });
    return counts;
  }, [filteredAccommodations]);

  const handleGetDirections = (property: Accommodation) => {
    setSelectedProperty(property);
    setIsMapModalOpen(true);
  };

  const handleContact = (property: Accommodation) => {
    setSelectedProperty(property);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            counts={categoryCounts}
          />
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {filteredAccommodations.length} properties found
            </span>
            <FilterPanel
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
            />
          </div>
        </div>

        {/* Results */}
        {filteredAccommodations.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters to find more results.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccommodations.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onGetDirections={handleGetDirections}
                onContact={handleContact}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modals */}
      <ContactModal
        property={selectedProperty}
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      
      <MapModal
        property={selectedProperty}
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
      />
    </div>
  );
}

export default App;