'use client';

import { Clock, User, BookOpen, Award } from 'lucide-react';

interface RecentActivityProps {
  onTeacherSelect: (teacherId: string) => void;
}

export default function RecentActivity({ onTeacherSelect }: RecentActivityProps) {
  const activities = [
    {
      id: '1',
      type: 'teacher_added',
      message: 'New teacher Sarah Johnson joined Mathematics Department',
      time: '2 hours ago',
      icon: User,
      teacherId: '1'
    },
    {
      id: '2',
      type: 'class_scheduled',
      message: 'Advanced Physics class scheduled for tomorrow',
      time: '3 hours ago',
      icon: BookOpen,
      teacherId: '2'
    },
    {
      id: '3',
      type: 'achievement',
      message: 'John Smith received Excellence in Teaching award',
      time: '5 hours ago',
      icon: Award,
      teacherId: '3'
    },
    {
      id: '4',
      type: 'class_completed',
      message: 'Chemistry Lab session completed successfully',
      time: '1 day ago',
      icon: BookOpen,
      teacherId: '4'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => onTeacherSelect(activity.teacherId)}
          >
            <div className="p-2 bg-blue-50 rounded-lg">
              <activity.icon className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
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
  );
}