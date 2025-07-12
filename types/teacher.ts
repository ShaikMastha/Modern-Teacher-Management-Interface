export interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  address?: string;
  experience: string;
  rating: number;
  classes: number;
  status: 'active' | 'inactive' | 'on_leave';
  image?: string;
  bio?: string;
  qualifications?: string[];
  achievements?: string[];
  dateJoined?: Date;
  lastLogin?: Date;
}

export interface TeacherStats {
  totalTeachers: number;
  activeTeachers: number;
  totalClasses: number;
  averageRating: number;
  newTeachersThisMonth: number;
}

export interface Activity {
  id: string;
  type: 'teacher_added' | 'class_scheduled' | 'achievement' | 'class_completed' | 'teacher_updated';
  message: string;
  timestamp: Date;
  teacherId?: string;
  metadata?: Record<string, any>;
}