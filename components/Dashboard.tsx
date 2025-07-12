'use client';

import { Users, BookOpen, Calendar, TrendingUp, Clock, Award } from 'lucide-react';
import QuickActions from './QuickActions';

interface DashboardProps {
  onViewChange: (view: string) => void;
}

export default function Dashboard({ onViewChange }: DashboardProps) {
  const stats = [
    { title: 'Total Teachers', value: '247', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { title: 'Total Students', value: '1,847', change: '+8%', icon: Users, color: 'bg-green-500' },
    { title: 'Active Courses', value: '89', change: '+5%', icon: BookOpen, color: 'bg-purple-500' },
    { title: 'Classes Today', value: '23', change: '+3', icon: Calendar, color: 'bg-orange-500' },
  ];

  const recentActivities = [
    { id: 1, message: 'New teacher Sarah Johnson joined Mathematics Department', time: '2 hours ago', icon: Users },
    { id: 2, message: 'Advanced Physics class scheduled for tomorrow', time: '3 hours ago', icon: Calendar },
    { id: 3, message: 'John Smith received Excellence in Teaching award', time: '5 hours ago', icon: Award },
    { id: 4, message: 'Chemistry Lab session completed successfully', time: '1 day ago', icon: BookOpen },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening at your school today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                <stat.icon className="h-6 w-6" />
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
        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <activity.icon className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions onViewChange={onViewChange} />
      </div>
    </div>
  );
}