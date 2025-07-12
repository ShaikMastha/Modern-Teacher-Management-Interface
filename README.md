# School Management System - Teacher Profile Interface

A modern, responsive teacher management interface built with Next.js, TypeScript, and Tailwind CSS, based on the provided design reference.

## Features

- **Modern Teacher Profile Interface**: Clean, professional design with comprehensive teacher information
- **Interactive Schedule Grid**: Visual availability calendar with time slots and day-by-day scheduling
- **Qualifications Management**: Detailed sections for private and group qualifications with rates
- **Contact Information**: Organized email, phone, and address management
- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Navigation Sidebar**: Comprehensive school management navigation with active states
- **Tab-based Interface**: Multiple sections including availability, qualifications, students, and more

## Tech Stack

- **Next.js 13.5.1** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Design Features

### Layout Structure
- **Fixed Sidebar Navigation**: Dark theme with comprehensive school management options
- **Three-column Layout**: Teacher details, contact info, and main content area
- **Card-based Design**: Clean white cards with subtle shadows and rounded corners
- **Professional Color Scheme**: Slate sidebar with blue accents and clean white content areas

### Interactive Elements
- **Schedule Grid**: Interactive time-slot calendar with hover effects
- **Tab Navigation**: Smooth tab switching with active state indicators
- **Expandable Sections**: Collapsible qualification and detail sections
- **Action Buttons**: Edit, add, and remove functionality with appropriate icons

### Responsive Design
- **Mobile-first Approach**: Optimized for all screen sizes
- **Grid System**: Responsive grid that adapts from mobile to desktop
- **Flexible Sidebar**: Collapsible navigation for smaller screens
- **Scrollable Content**: Proper overflow handling for large datasets

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd school-management-system
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # Reusable components
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── TeacherProfile.tsx # Main teacher profile container
│   ├── TeacherDetails.tsx # Teacher basic information
│   ├── QualificationsSection.tsx # Qualifications management
│   └── ScheduleGrid.tsx   # Interactive schedule calendar
└── README.md             # Project documentation
```

## Key Components

### Sidebar Navigation
- Comprehensive school management menu
- Active state indicators
- User profile section at bottom
- Dark theme with hover effects

### Teacher Profile
- Breadcrumb navigation
- Three-section layout (details, contact, main content)
- Tab-based interface for different data views
- Settings and edit functionality

### Schedule Grid
- Interactive time-slot calendar
- Visual availability indicators
- Hover effects for better UX
- Legend for different states (available, busy, not set)

### Qualifications Management
- Private and group qualifications sections
- Rate management per qualification
- Expandable/collapsible sections
- Add/edit/remove functionality

## Design Principles

- **Clean & Professional**: Modern interface suitable for educational institutions
- **User-Friendly**: Intuitive navigation and clear information hierarchy
- **Responsive**: Works seamlessly across all device sizes
- **Accessible**: Proper contrast ratios and keyboard navigation support
- **Consistent**: Unified design language throughout the application

## Customization

### Colors
The application uses a professional color scheme:
- **Primary**: Blue (#3B82F6) for active states and accents
- **Sidebar**: Slate-800 (#1E293B) for navigation
- **Background**: Gray-50 (#F9FAFB) for main content area
- **Cards**: White (#FFFFFF) with subtle shadows

### Layout
- **Sidebar Width**: 256px (16rem) fixed width
- **Card Spacing**: 24px (1.5rem) gap between elements
- **Border Radius**: 8px (0.5rem) for consistent rounded corners
- **Shadows**: Subtle box-shadows for depth without distraction

## Development

### Adding New Features

1. Create new components in the `components/` directory
2. Follow the existing naming conventions and structure
3. Use TypeScript interfaces for props and data structures
4. Maintain responsive design principles
5. Test across different screen sizes

### Code Quality

- Use TypeScript for all new code
- Follow React best practices and hooks
- Maintain consistent naming conventions
- Add proper error handling where needed
- Write descriptive comments for complex logic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.