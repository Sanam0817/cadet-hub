
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Announcement {
  id: string;
  title: string;
  category: string;
  date: string;
  isNew?: boolean;
}

interface AnnouncementPreviewProps {
  announcements: Announcement[];
}

const AnnouncementPreview: React.FC<AnnouncementPreviewProps> = ({ announcements }) => {
  return (
    <div className="space-y-4">
      {announcements.map((announcement, index) => (
        <div
          key={announcement.id}
          className={`p-4 rounded-lg border border-border ${
            announcement.isNew ? 'bg-blue-50' : 'bg-white'
          } opacity-0 animate-fade-in animate-slide-up`}
          style={{ animationDelay: `${200 + index * 100}ms` }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {announcement.category}
                </span>
                {announcement.isNew && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-ncc-red/10 text-ncc-red">
                    New
                  </span>
                )}
              </div>
              <h3 className="font-medium mt-2">{announcement.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
            </div>
          </div>
        </div>
      ))}

      <Link
        to="/announcements"
        className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium mt-2 transition-colors"
      >
        View all announcements
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default AnnouncementPreview;
