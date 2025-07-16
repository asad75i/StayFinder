import React from 'react';
import { Home, Building, Users } from 'lucide-react';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  counts: { all: number; pg: number; hostel: number; house: number };
}

export default function CategoryTabs({ activeCategory, onCategoryChange, counts }: CategoryTabsProps) {
  const categories = [
    { id: 'all', label: 'All Properties', icon: Home, count: counts.all },
    { id: 'pg', label: 'PG', icon: Users, count: counts.pg },
    { id: 'hostel', label: 'Hostels', icon: Building, count: counts.hostel },
    { id: 'house', label: 'Houses', icon: Home, count: counts.house }
  ];

  return (
    <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            }`}
          >
            <Icon className="h-4 w-4 mr-2" />
            {category.label}
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
              isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}