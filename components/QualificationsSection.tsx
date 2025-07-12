'use client';

import { Edit, Minus } from 'lucide-react';

export default function QualificationsSection() {
  const privateQualifications = [
    { name: 'Vocal Contemporary', rate: '$25.00' },
    { name: 'Vocal Core', rate: '$25.00' },
    { name: 'Vocal Hybrid', rate: '$25.00' },
    { name: 'Vocal Plus', rate: '$25.00' },
    { name: 'Instrumental', rate: '$25.00' }
  ];

  return (
    <div className="space-y-6">
      {/* Private Qualifications */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Private Qualifications</h3>
          <div className="flex items-center space-x-2">
            <Edit className="h-4 w-4 text-gray-400" />
            <Minus className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600 border-b pb-2">
            <span>Name</span>
            <span>Rate ($/hr)</span>
          </div>
          {privateQualifications.map((qual, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 text-sm">
              <span className="text-gray-900">{qual.name}</span>
              <span className="text-gray-900">{qual.rate}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Group Qualifications */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Group Qualifications</h3>
          <div className="flex items-center space-x-2">
            <Edit className="h-4 w-4 text-gray-400" />
            <Minus className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600 border-b pb-2">
            <span>Name</span>
            <span>Rate ($/hr)</span>
          </div>
          <div className="text-center py-4 text-gray-500 text-sm">
            No group qualifications added
          </div>
        </div>
      </div>
    </div>
  );
}