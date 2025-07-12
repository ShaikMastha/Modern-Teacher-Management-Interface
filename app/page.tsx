'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TeacherProfile from '@/components/TeacherProfile';
import Dashboard from '@/components/Dashboard';
import Students from '@/components/Students';
import Courses from '@/components/Courses';
import Schedule from '@/components/Schedule';
import Attendance from '@/components/Attendance';
import Reports from '@/components/Reports';
import Documents from '@/components/Documents';
import Settings from '@/components/Settings';

export default function Home() {
  const [activeView, setActiveView] = useState('teachers');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard onViewChange={setActiveView} />;
      case 'teachers':
        return <TeacherProfile />;
      case 'students':
        return <Students />;
      case 'courses':
        return <Courses />;
      case 'schedule':
        return <Schedule />;
      case 'attendance':
        return <Attendance />;
      case 'reports':
        return <Reports />;
      case 'documents':
        return <Documents />;
      case 'settings':
        return <Settings />;
      default:
        return <TeacherProfile />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1 ml-64">
        {renderContent()}
      </main>
    </div>
  );
}