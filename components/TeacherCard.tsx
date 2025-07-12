'use client';

import { Star, Mail, Phone, BookOpen, MoreVertical } from 'lucide-react';

interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  experience: string;
  rating: number;
  classes: number;
  status: 'active' | 'inactive' | 'on_leave';
  image?: string;
}

interface TeacherCardProps {
  teacher: Teacher;
  viewMode: 'grid' | 'list';
  onSelect: () => void;
}

export default function TeacherCard({ teacher, viewMode, onSelect }: TeacherCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'on_leave':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'inactive':
        return 'Inactive';
      case 'on_leave':
        return 'On Leave';
      default:
        return 'Unknown';
    }
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={onSelect}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={teacher.image || `https://ui-avatars.com/api/?name=${teacher.name}&background=3B82F6&color=fff`}
              alt={teacher.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
              <p className="text-sm text-gray-600">{teacher.subject}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">{teacher.classes}</p>
              <p className="text-xs text-gray-600">Classes</p>
            </div>
            
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-900">{teacher.rating}</span>
            </div>
            
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(teacher.status)}`}>
              {getStatusText(teacher.status)}
            </span>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onSelect}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={teacher.image || `https://ui-avatars.com/api/?name=${teacher.name}&background=3B82F6&color=fff`}
            alt={teacher.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
            <p className="text-sm text-gray-600">{teacher.subject}</p>
          </div>
        </div>
        
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(teacher.status)}`}>
          {getStatusText(teacher.status)}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Mail className="h-4 w-4" />
          <span className="truncate">{teacher.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Phone className="h-4 w-4" />
          <span>{teacher.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <BookOpen className="h-4 w-4" />
          <span>{teacher.experience} experience</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-900">{teacher.rating}</span>
        </div>
        <div className="text-sm text-gray-600">
          {teacher.classes} classes
        </div>
      </div>
    </div>
  );
}