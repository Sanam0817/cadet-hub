
import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  isPriority?: boolean;
}

interface EventsTimelineProps {
  events: Event[];
}

const EventsTimeline: React.FC<EventsTimelineProps> = ({ events }) => {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div
          key={event.id}
          className="relative pl-6 opacity-0 animate-fade-in animate-slide-up"
          style={{ animationDelay: `${300 + index * 100}ms` }}
        >
          {/* Timeline dot */}
          <div className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ${event.isPriority ? 'bg-ncc-red' : 'bg-primary'}`}></div>
          
          {/* Timeline line */}
          {index < events.length - 1 && (
            <div className="absolute left-1 top-4 w-px h-full bg-gray-200"></div>
          )}
          
          <div className={`p-4 rounded-lg border ${
            event.isPriority ? 'border-ncc-red/20 bg-ncc-red/5' : 'border-border bg-white'
          }`}>
            <h3 className="font-medium">{event.title}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mt-2 space-y-1 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center">
                <Calendar className="mr-1.5 h-3.5 w-3.5" />
                <span>{event.date} · {event.time}</span>
              </div>
              <div className="sm:pl-4 sm:border-l border-gray-200">
                {event.location}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center pt-4">
        <Link
          to="/events"
          className="inline-flex items-center justify-center px-4 py-2 border border-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors"
        >
          View Full Calendar
        </Link>
      </div>
    </div>
  );
};

export default EventsTimeline;
