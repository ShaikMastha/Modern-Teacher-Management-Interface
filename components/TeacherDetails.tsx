'use client';

import { Edit, Minus } from 'lucide-react';

export default function TeacherDetails() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Details</h3>
        <div className="flex items-center space-x-2">
          <Edit className="h-4 w-4 text-gray-400" />
          <Minus className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <p className="font-medium text-gray-900">Alynia Allan</p>
          </div>
          <div>
            <label className="text-sm text-gray-600">Role</label>
            <p className="font-medium text-gray-900">Teacher</p>
          </div>
        </div>
        
        <div>
          <label className="text-sm text-gray-600">Birth Date</label>
          <p className="font-medium text-gray-900">-</p>
        </div>
      </div>
    </div>
  );
}