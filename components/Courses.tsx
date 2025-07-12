'use client';

import { useState } from 'react';
import { Search, Plus, BookOpen, Users, Clock, Calendar } from 'lucide-react';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: '1',
      name: 'Advanced Mathematics',
      code: 'MATH-401',
      teacher: 'Sarah Johnson',
      students: 28,
      duration: '1 semester',
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      status: 'active',
      description: 'Advanced calculus and mathematical analysis'
    },
    {
      id: '2',
      name: 'Physics Laboratory',
      code: 'PHYS-301',
      teacher: 'Michael Chen',
      students: 24,
      duration: '1 semester',
      schedule: 'Tue, Thu - 2:00 PM',
      status: 'active',
      description: 'Hands-on physics experiments and analysis'
    },
    {
      id: '3',
      name: 'English Literature',
      code: 'ENG-201',
      teacher: 'Emily Rodriguez',
      students: 32,
      duration: '1 year',
      schedule: 'Mon, Wed, Fri - 11:00 AM',
      status: 'active',
      description: 'Classic and contemporary literature analysis'
    },
    {
      id: '4',
      name: 'Chemistry Fundamentals',
      code: 'CHEM-101',
      teacher: 'David Thompson',
      students: 30,
      duration: '1 semester',
      schedule: 'Tue, Thu - 10:00 AM',
      status: 'active',
      description: 'Basic principles of chemistry and lab work'
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Courses</h1>
          <p className="text-gray-600">Manage course curriculum and assignments</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Add Course
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="relative flex-1 lg:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="all">All Subjects</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="history">History</option>
            </select>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{course.name}</h3>
                  <p className="text-sm text-gray-600">{course.code}</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                Active
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">{course.description}</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Teacher:</span>
                </div>
                <span className="font-medium text-gray-900">{course.teacher}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Students:</span>
                </div>
                <span className="font-medium text-gray-900">{course.students}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Duration:</span>
                </div>
                <span className="font-medium text-gray-900">{course.duration}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule:</span>
                </div>
                <span className="font-medium text-gray-900">{course.schedule}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}