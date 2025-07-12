'use client';

import { useState } from 'react';
import { Calendar, Clock, Plus, Filter } from 'lucide-react';

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'week' | 'day'>('week');

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const scheduleData = [
    {
      id: '1',
      title: 'Advanced Mathematics',
      teacher: 'Sarah Johnson',
      room: 'Room 101',
      time: '9:00 AM - 10:00 AM',
      day: 'Monday',
      students: 28,
      color: 'bg-blue-500'
    },
    {
      id: '2',
      title: 'Physics Laboratory',
      teacher: 'Michael Chen',
      room: 'Lab 201',
      time: '2:00 PM - 3:00 PM',
      day: 'Tuesday',
      students: 24,
      color: 'bg-green-500'
    },
    {
      id: '3',
      title: 'English Literature',
      teacher: 'Emily Rodriguez',
      room: 'Room 105',
      time: '11:00 AM - 12:00 PM',
      day: 'Wednesday',
      students: 32,
      color: 'bg-purple-500'
    },
    {
      id: '4',
      title: 'Chemistry Fundamentals',
      teacher: 'David Thompson',
      room: 'Lab 301',
      time: '10:00 AM - 11:00 AM',
      day: 'Thursday',
      students: 30,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule</h1>
          <p className="text-gray-600">Manage class schedules and timetables</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Add Class
        </button>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-600" />
              <input
                type="date"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('week')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'week' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setViewMode('day')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'day' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
              >
                Day
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="all">All Teachers</option>
              <option value="sarah">Sarah Johnson</option>
              <option value="michael">Michael Chen</option>
              <option value="emily">Emily Rodriguez</option>
            </select>
          </div>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Header */}
            <div className="grid grid-cols-6 gap-0 border-b border-gray-200">
              <div className="p-4 bg-gray-50 font-medium text-gray-900">Time</div>
              {days.map((day) => (
                <div key={day} className="p-4 bg-gray-50 font-medium text-gray-900 text-center">
                  {day}
                </div>
              ))}
            </div>

            {/* Time Slots */}
            {timeSlots.map((time, timeIndex) => (
              <div key={time} className="grid grid-cols-6 gap-0 border-b border-gray-100">
                <div className="p-4 bg-gray-50 text-sm text-gray-600 font-medium">
                  {time}
                </div>
                {days.map((day, dayIndex) => {
                  const classForSlot = scheduleData.find(
                    item => item.day === day && item.time.startsWith(time.split(' ')[0])
                  );

                  return (
                    <div key={`${day}-${time}`} className="p-2 min-h-[80px] border-r border-gray-100">
                      {classForSlot && (
                        <div className={`${classForSlot.color} text-white p-3 rounded-lg h-full`}>
                          <div className="text-sm font-medium mb-1">{classForSlot.title}</div>
                          <div className="text-xs opacity-90">{classForSlot.teacher}</div>
                          <div className="text-xs opacity-90">{classForSlot.room}</div>
                          <div className="text-xs opacity-90">{classForSlot.students} students</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's Classes */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Classes</h3>
        <div className="space-y-3">
          {scheduleData.slice(0, 3).map((classItem) => (
            <div key={classItem.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className={`w-4 h-4 ${classItem.color} rounded-full`}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{classItem.title}</h4>
                  <span className="text-sm text-gray-600">{classItem.time}</span>
                </div>
                <p className="text-sm text-gray-600">{classItem.teacher} • {classItem.room}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}