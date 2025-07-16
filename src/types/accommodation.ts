export interface Accommodation {
  id: string;
  title: string;
  type: 'pg' | 'hostel' | 'house';
  location: string;
  address: string;
  price: number;
  currency: string;
  images: string[];
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  contactPhone: string;
  contactEmail: string;
  rating: number;
  reviews: number;
  
  // PG and Hostel specific
  totalBeds?: number;
  availableBeds?: number;
  roomTypes?: string[];
  
  // House specific
  isIndependent?: boolean;
  bedrooms?: number;
  bathrooms?: number;
  area?: number; // in sqft
  furnishingStatus?: 'furnished' | 'semi-furnished' | 'unfurnished';
}

export interface FilterOptions {
  type: string[];
  priceRange: [number, number];
  location: string;
  amenities: string[];
  availability?: 'available' | 'limited' | 'all';
}