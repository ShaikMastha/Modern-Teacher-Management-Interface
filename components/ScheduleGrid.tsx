'use client';

export default function ScheduleGrid() {
  const timeSlots = [
    '7:30am', '8:00am', '8:30am', '9:00am', '9:30am', '10:00am', '10:30am', 
    '11:00am', '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm', '2:00pm'
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        {/* Header */}
        <div className="grid grid-cols-8 gap-1 mb-2">
          <div className="p-3 text-sm font-medium text-gray-600">Time</div>
          {days.map((day) => (
            <div key={day} className="p-3 text-sm font-medium text-gray-600 text-center">
              {day}
            </div>
          ))}
        </div>

        {/* Time Grid */}
        <div className="space-y-1">
          {timeSlots.map((time, timeIndex) => (
            <div key={time} className="grid grid-cols-8 gap-1">
              <div className="p-3 text-sm text-gray-600 bg-gray-50 rounded">
                {time}
              </div>
              {days.map((day, dayIndex) => (
                <div
                  key={`${day}-${time}`}
                  className={`p-3 min-h-[48px] rounded border-2 border-dashed border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer ${
                    // Add some sample availability blocks
                    (timeIndex >= 4 && timeIndex <= 8 && dayIndex < 5) ? 'bg-green-100 border-green-300' :
                    (timeIndex >= 10 && timeIndex <= 12 && dayIndex === 5) ? 'bg-gray-300 border-gray-400' : ''
                  }`}
                >
                  {/* Sample content for demonstration */}
                  {timeIndex >= 4 && timeIndex <= 8 && dayIndex < 5 && (
                    <div className="text-xs text-green-800">Available</div>
                  )}
                  {timeIndex >= 10 && timeIndex <= 12 && dayIndex === 5 && (
                    <div className="text-xs text-gray-600">Busy</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
            <span className="text-gray-600">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 border border-gray-400 rounded"></div>
            <span className="text-gray-600">Busy</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-dashed border-gray-200 rounded"></div>
            <span className="text-gray-600">Not Set</span>
          </div>
        </div>
      </div>
    </div>
  );
}