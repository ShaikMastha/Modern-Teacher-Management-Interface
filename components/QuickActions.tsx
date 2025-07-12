'use client';

import { Plus, UserPlus, Calendar, FileText, Settings, X } from 'lucide-react';
import { useState } from 'react';

interface QuickActionsProps {
  onViewChange: (view: string) => void;
}

export default function QuickActions({ onViewChange }: QuickActionsProps) {
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [teacherForm, setTeacherForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    experience: '',
    address: ''
  });
  const [scheduleForm, setScheduleForm] = useState({
    courseName: '',
    teacher: '',
    room: '',
    date: '',
    startTime: '',
    endTime: '',
    students: ''
  });

  const handleAddTeacher = () => {
    setShowAddTeacherModal(true);
  };

  const handleScheduleClass = () => {
    setShowScheduleModal(true);
  };

  const handleViewReports = () => {
    onViewChange('reports');
  };

  const handleSettings = () => {
    onViewChange('settings');
  };

  const submitTeacherForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('New teacher data:', teacherForm);
    alert('Teacher added successfully!');
    setShowAddTeacherModal(false);
    setTeacherForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      experience: '',
      address: ''
    });
  };

  const submitScheduleForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('New class schedule:', scheduleForm);
    alert('Class scheduled successfully!');
    setShowScheduleModal(false);
    setScheduleForm({
      courseName: '',
      teacher: '',
      room: '',
      date: '',
      startTime: '',
      endTime: '',
      students: ''
    });
  };

  const actions = [
    {
      id: 'add_teacher',
      label: 'Add New Teacher',
      icon: UserPlus,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Register a new teacher',
      onClick: handleAddTeacher
    },
    {
      id: 'schedule_class',
      label: 'Schedule Class',
      icon: Calendar,
      color: 'bg-green-600 hover:bg-green-700',
      description: 'Create new class schedule',
      onClick: handleScheduleClass
    },
    {
      id: 'view_reports',
      label: 'View Reports',
      icon: FileText,
      color: 'bg-purple-600 hover:bg-purple-700',
      description: 'Performance analytics',
      onClick: handleViewReports
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      color: 'bg-gray-600 hover:bg-gray-700',
      description: 'System configuration',
      onClick: handleSettings
    }
  ];

  return (
    <>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        
        <div className="space-y-3">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={action.onClick}
              className={`w-full flex items-center space-x-3 p-4 rounded-lg text-white transition-colors ${action.color}`}
            >
              <action.icon className="h-5 w-5" />
              <div className="text-left">
                <p className="font-medium">{action.label}</p>
                <p className="text-sm opacity-90">{action.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
          <p className="text-sm text-gray-600 mb-3">
            Check out our documentation or contact support.
          </p>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View Documentation →
          </button>
        </div>
      </div>

      {/* Add Teacher Modal */}
      {showAddTeacherModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Add New Teacher</h2>
                <button
                  onClick={() => setShowAddTeacherModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={submitTeacherForm} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={teacherForm.name}
                    onChange={(e) => setTeacherForm({...teacherForm, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter teacher's full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={teacherForm.email}
                    onChange={(e) => setTeacherForm({...teacherForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="teacher@school.edu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={teacherForm.phone}
                    onChange={(e) => setTeacherForm({...teacherForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject/Department *
                  </label>
                  <select
                    required
                    value={teacherForm.subject}
                    onChange={(e) => setTeacherForm({...teacherForm, subject: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="English Literature">English Literature</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    value={teacherForm.experience}
                    onChange={(e) => setTeacherForm({...teacherForm, experience: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="5"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    value={teacherForm.address}
                    onChange={(e) => setTeacherForm({...teacherForm, address: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter full address"
                    rows={3}
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddTeacherModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Add Teacher
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Class Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Schedule New Class</h2>
                <button
                  onClick={() => setShowScheduleModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={submitScheduleForm} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={scheduleForm.courseName}
                    onChange={(e) => setScheduleForm({...scheduleForm, courseName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Advanced Mathematics"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teacher *
                  </label>
                  <select
                    required
                    value={scheduleForm.teacher}
                    onChange={(e) => setScheduleForm({...scheduleForm, teacher: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Teacher</option>
                    <option value="Sarah Johnson">Sarah Johnson</option>
                    <option value="Michael Chen">Michael Chen</option>
                    <option value="Emily Rodriguez">Emily Rodriguez</option>
                    <option value="David Thompson">David Thompson</option>
                    <option value="Lisa Anderson">Lisa Anderson</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Room/Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={scheduleForm.room}
                    onChange={(e) => setScheduleForm({...scheduleForm, room: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Room 101"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={scheduleForm.date}
                    onChange={(e) => setScheduleForm({...scheduleForm, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={scheduleForm.startTime}
                      onChange={(e) => setScheduleForm({...scheduleForm, startTime: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={scheduleForm.endTime}
                      onChange={(e) => setScheduleForm({...scheduleForm, endTime: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Students
                  </label>
                  <input
                    type="number"
                    value={scheduleForm.students}
                    onChange={(e) => setScheduleForm({...scheduleForm, students: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="30"
                    min="1"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowScheduleModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    Schedule Class
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}