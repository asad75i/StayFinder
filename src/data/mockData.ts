import { Accommodation } from '../types/accommodation';

export const accommodations: Accommodation[] = [
  {
    id: '1',
    title: 'Sunshine PG for Boys',
    type: 'pg',
    location: 'Koramangala',
    address: '123 5th Block, Koramangala, Bangalore - 560095',
    price: 8500,
    currency: '₹',
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    ],
    amenities: ['WiFi', 'AC', 'Meals', 'Laundry', 'Security', 'Parking'],
    coordinates: { lat: 12.9352, lng: 77.6245 },
    contactPhone: '+91 9876543210',
    contactEmail: 'contact@sunshinepg.com',
    rating: 4.5,
    reviews: 128,
    totalBeds: 40,
    availableBeds: 5,
    roomTypes: ['Single', 'Double', 'Triple']
  },
  {
    id: '2',
    title: 'Green Valley Hostel',
    type: 'hostel',
    location: 'Indiranagar',
    address: '456 12th Main, Indiranagar, Bangalore - 560038',
    price: 6000,
    currency: '₹',
    images: [
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg'
    ],
    amenities: ['WiFi', 'Common Kitchen', 'Laundry', 'Study Room', 'Games Room'],
    coordinates: { lat: 12.9719, lng: 77.6412 },
    contactPhone: '+91 9876543211',
    contactEmail: 'info@greenvalleyhostel.com',
    rating: 4.2,
    reviews: 85,
    totalBeds: 60,
    availableBeds: 12,
    roomTypes: ['Dormitory', 'Private Room']
  },
  {
    id: '3',
    title: 'Independent 2BHK Villa',
    type: 'house',
    location: 'HSR Layout',
    address: '789 Sector 2, HSR Layout, Bangalore - 560102',
    price: 25000,
    currency: '₹',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
    ],
    amenities: ['Parking', 'Garden', 'Security', 'Power Backup', 'Water Supply'],
    coordinates: { lat: 12.9116, lng: 77.6473 },
    contactPhone: '+91 9876543212',
    contactEmail: 'owner@hsrvilla.com',
    rating: 4.8,
    reviews: 45,
    isIndependent: true,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    furnishingStatus: 'semi-furnished'
  },
  {
    id: '4',
    title: 'City Center PG for Girls',
    type: 'pg',
    location: 'MG Road',
    address: '321 Brigade Road, MG Road Area, Bangalore - 560001',
    price: 12000,
    currency: '₹',
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    ],
    amenities: ['WiFi', 'AC', 'Meals', 'Housekeeping', 'Security', 'Gym'],
    coordinates: { lat: 12.9716, lng: 77.5946 },
    contactPhone: '+91 9876543213',
    contactEmail: 'hello@citycenterpg.com',
    rating: 4.6,
    reviews: 210,
    totalBeds: 30,
    availableBeds: 2,
    roomTypes: ['Single', 'Double']
  },
  {
    id: '5',
    title: 'Shared 3BHK Apartment',
    type: 'house',
    location: 'Whitefield',
    address: '567 ITPL Main Road, Whitefield, Bangalore - 560066',
    price: 18000,
    currency: '₹',
    images: [
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg'
    ],
    amenities: ['WiFi', 'AC', 'Parking', 'Gym', 'Swimming Pool', 'Security'],
    coordinates: { lat: 12.9698, lng: 77.7499 },
    contactPhone: '+91 9876543214',
    contactEmail: 'contact@whitefieldapt.com',
    rating: 4.3,
    reviews: 67,
    isIndependent: false,
    bedrooms: 3,
    bathrooms: 3,
    area: 1500,
    furnishingStatus: 'furnished'
  },
  {
    id: '6',
    title: 'Budget Hostel Near Metro',
    type: 'hostel',
    location: 'Electronic City',
    address: '890 Phase 1, Electronic City, Bangalore - 560100',
    price: 4500,
    currency: '₹',
    images: [
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg'
    ],
    amenities: ['WiFi', 'Common Kitchen', 'Laundry', 'Metro Nearby', 'Security'],
    coordinates: { lat: 12.8456, lng: 77.6603 },
    contactPhone: '+91 9876543215',
    contactEmail: 'stay@budgethostel.com',
    rating: 4.0,
    reviews: 156,
    totalBeds: 80,
    availableBeds: 15,
    roomTypes: ['Dormitory', 'Shared Room']
  }
];

export const locations = [
  'All Locations',
  'Koramangala',
  'Indiranagar',
  'HSR Layout',
  'MG Road',
  'Whitefield',
  'Electronic City',
  'BTM Layout',
  'Jayanagar',
  'Marathahalli',
  'Bellandur'
];

export const amenitiesList = [
  'WiFi',
  'AC',
  'Meals',
  'Laundry',
  'Security',
  'Parking',
  'Gym',
  'Swimming Pool',
  'Common Kitchen',
  'Study Room',
  'Games Room',
  'Garden',
  'Power Backup',
  'Water Supply',
  'Housekeeping',
  'Metro Nearby'
];