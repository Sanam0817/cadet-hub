
import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';

interface AnnouncementCardProps {
  title: string;
  category: string;
  date: string;
  content: string;
  isImportant?: boolean;
  isUnread?: boolean;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  title,
  category,
  date,
  content,
  isImportant = false,
  isUnread = false,
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border overflow-hidden card-hover ${
      isImportant ? 'border-ncc-red' : isUnread ? 'border-primary' : 'border-border'
    } opacity-0 animate-fade-in animate-slide-up`}>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                isImportant
                  ? 'bg-ncc-red/10 text-ncc-red'
                  : 'bg-primary/10 text-primary'
              }`}
            >
              <Tag className="w-3 h-3 mr-1" />
              {category}
            </span>
            {isUnread && (
              <span className="ml-2 inline-block w-2 h-2 rounded-full bg-primary" />
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{content}</p>
        
        <div className="mt-4">
          <button
            className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
