'use client';

import { useState } from 'react';
import { BarChart3, TrendingUp, Users, BookOpen, Calendar, Download, Filter } from 'lucide-react';

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedReport, setSelectedReport] = useState('overview');

  const reportTypes = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'attendance', name: 'Attendance', icon: Users },
    { id: 'performance', name: 'Performance', icon: TrendingUp },
    { id: 'courses', name: 'Courses', icon: BookOpen }
  ];

  const overviewStats = [
    { title: 'Total Students', value: '1,847', change: '+8%', trend: 'up' },
    { title: 'Total Teachers', value: '247', change: '+12%', trend: 'up' },
    { title: 'Active Courses', value: '89', change: '+5%', trend: 'up' },
    { title: 'Attendance Rate', value: '94.2%', change: '+2.1%', trend: 'up' }
  ];

  const attendanceData = [
    { month: 'Jan', rate: 92 },
    { month: 'Feb', rate: 94 },
    { month: 'Mar', rate: 91 },
    { month: 'Apr', rate: 95 },
    { month: 'May', rate: 93 },
    { month: 'Jun', rate: 96 }
  ];

  const topPerformers = [
    { name: 'Emma Johnson', grade: 'Grade 10', gpa: '3.9', improvement: '+0.2' },
    { name: 'Michael Chen', grade: 'Grade 11', gpa: '3.8', improvement: '+0.3' },
    { name: 'Sarah Williams', grade: 'Grade 9', gpa: '3.7', improvement: '+0.1' },
    { name: 'David Brown', grade: 'Grade 12', gpa: '3.6', improvement: '+0.4' }
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
          <p className="text-gray-600">Analytics and performance insights</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>

      {/* Report Controls */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            {reportTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedReport(type.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedReport === type.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <type.icon className="h-4 w-4" />
                <span>{type.name}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      {selectedReport === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {overviewStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Attendance Chart */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Attendance Rate</h3>
              <div className="space-y-4">
                {attendanceData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-12">{data.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${data.rate}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12">{data.rate}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performers</h3>
              <div className="space-y-4">
                {topPerformers.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{student.name}</h4>
                      <p className="text-sm text-gray-600">{student.grade}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">GPA: {student.gpa}</p>
                      <p className="text-sm text-green-600">{student.improvement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Attendance Report */}
      {selectedReport === 'attendance' && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Attendance Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">94.2%</div>
              <div className="text-sm text-gray-600">Overall Attendance</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,740</div>
              <div className="text-sm text-gray-600">Present Today</div>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">107</div>
              <div className="text-sm text-gray-600">Absent Today</div>
            </div>
          </div>
          <p className="text-gray-600">Detailed attendance analytics and trends would be displayed here.</p>
        </div>
      )}

      {/* Performance Report */}
      {selectedReport === 'performance' && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Academic Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">3.7</div>
              <div className="text-sm text-gray-600">Average GPA</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-sm text-gray-600">Pass Rate</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
              <div className="text-sm text-gray-600">Honor Students</div>
            </div>
          </div>
          <p className="text-gray-600">Comprehensive performance metrics and grade distributions would be shown here.</p>
        </div>
      )}

      {/* Courses Report */}
      {selectedReport === 'courses' && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Course Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">89</div>
              <div className="text-sm text-gray-600">Active Courses</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">4.2</div>
              <div className="text-sm text-gray-600">Avg. Rating</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">Completion Rate</div>
            </div>
          </div>
          <p className="text-gray-600">Course enrollment trends, completion rates, and student feedback would be displayed here.</p>
        </div>
      )}
    </div>
  );
}