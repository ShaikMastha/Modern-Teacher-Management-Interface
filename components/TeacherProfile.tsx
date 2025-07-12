'use client';

import { useState } from 'react';
import { 
  ChevronLeft, 
  Settings, 
  Edit, 
  Mail, 
  Phone, 
  MapPin,
  Plus,
  Minus
} from 'lucide-react';
import TeacherDetails from './TeacherDetails';
import QualificationsSection from './QualificationsSection';
import ScheduleGrid from './ScheduleGrid';

export default function TeacherProfile() {
  const [activeTab, setActiveTab] = useState('availability');

  const tabs = [
    { id: 'availability', label: 'Availability' },
    { id: 'qualifications', label: 'Qualifications' },
    { id: 'students', label: 'Students' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'lessons', label: 'Scheduled Lessons' },
    { id: 'unscheduled', label: 'Unscheduled Lessons' },
    { id: 'vouchers', label: 'Free Vouchers' },
    { id: 'reports', label: 'Reports' },
    { id: 'history', label: 'History' }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Teachers /</span>
              <span className="font-semibold text-gray-900">Alynia Allan</span>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Teacher Details */}
        <div className="lg:col-span-1">
          <TeacherDetails />
          <div className="mt-6">
            <QualificationsSection />
          </div>
        </div>

        {/* Right Column - Contact & Address */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Email Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Email</h3>
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Work</span>
                  <span className="text-sm text-gray-900">alyniaallan@example.com</span>
                </div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Home</span>
                  <span className="text-sm text-gray-900">(416) 648-9007</span>
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Addresses</h3>
              <Plus className="h-4 w-4 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Home</span>
                </div>
                <div className="text-sm text-gray-900">
                  <p>56 Oakwood Dr Santa Cir</p>
                  <p>North York, Ontario</p>
                  <p>Canada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'availability' && <ScheduleGrid />}
              {activeTab === 'qualifications' && (
                <div className="text-center py-8 text-gray-500">
                  Qualifications content would go here
                </div>
              )}
              {/* Add other tab contents as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}