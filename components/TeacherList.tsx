'use client';

import { useState } from 'react';
import { Search, Filter, Plus, Grid, List, Star } from 'lucide-react';
import TeacherCard from './TeacherCard';

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

interface TeacherListProps {
  onTeacherSelect: (teacherId: string) => void;
}

export default function TeacherList({ onTeacherSelect }: TeacherListProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const teachers: Teacher[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      subject: 'Mathematics',
      email: 'sarah.johnson@school.edu',
      phone: '+1 (555) 123-4567',
      experience: '8 years',
      rating: 4.9,
      classes: 5,
      status: 'active',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'Michael Chen',
      subject: 'Physics',
      email: 'michael.chen@school.edu',
      phone: '+1 (555) 234-5678',
      experience: '12 years',
      rating: 4.8,
      classes: 4,
      status: 'active',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      subject: 'Chemistry',
      email: 'emily.rodriguez@school.edu',
      phone: '+1 (555) 345-6789',
      experience: '6 years',
      rating: 4.7,
      classes: 3,
      status: 'on_leave',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '4',
      name: 'David Thompson',
      subject: 'Biology',
      email: 'david.thompson@school.edu',
      phone: '+1 (555) 456-7890',
      experience: '10 years',
      rating: 4.6,
      classes: 6,
      status: 'active',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '5',
      name: 'Lisa Anderson',
      subject: 'English Literature',
      email: 'lisa.anderson@school.edu',
      phone: '+1 (555) 567-8901',
      experience: '9 years',
      rating: 4.9,
      classes: 4,
      status: 'active',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '6',
      name: 'James Wilson',
      subject: 'History',
      email: 'james.wilson@school.edu',
      phone: '+1 (555) 678-9012',
      experience: '15 years',
      rating: 4.8,
      classes: 5,
      status: 'active',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || teacher.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Teachers</h1>
          <p className="text-gray-600">Manage your teaching staff</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Add Teacher
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="relative flex-1 lg:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search teachers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters and View Toggle */}
          <div className="flex items-center space-x-4">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="on_leave">On Leave</option>
            </select>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Showing {filteredTeachers.length} of {teachers.length} teachers
        </p>
      </div>

      {/* Teachers Grid/List */}
      <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
        {filteredTeachers.map((teacher) => (
          <TeacherCard 
            key={teacher.id} 
            teacher={teacher} 
            viewMode={viewMode}
            onSelect={() => onTeacherSelect(teacher.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredTeachers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">👨‍🏫</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No teachers found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}