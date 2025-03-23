
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  description,
  category,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden card-hover opacity-0 animate-fade-in animate-slide-up">
      <div className="p-5">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
          {category}
        </span>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-start">
            <Calendar className="w-4 h-4 text-gray-400 mt-0.5 mr-2" />
            <span className="text-sm text-gray-600">{date}</span>
          </div>
          <div className="flex items-start">
            <Clock className="w-4 h-4 text-gray-400 mt-0.5 mr-2" />
            <span className="text-sm text-gray-600">{time}</span>
          </div>
          <div className="flex items-start">
            <MapPin className="w-4 h-4 text-gray-400 mt-0.5 mr-2" />
            <span className="text-sm text-gray-600">{location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            RSVP
          </button>
          <button className="flex-1 bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
