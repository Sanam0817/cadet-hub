
import React, { useState } from 'react';
import Layout from '../components/Layout';
import AnnouncementCard from '../components/Announcements/AnnouncementCard';
import { Search, Filter } from 'lucide-react';

const dummyAnnouncements = [
  {
    id: '1',
    title: 'Annual NCC Camp Registration Open',
    category: 'Camp',
    date: 'October 15, 2023',
    content: 'Registration for the annual NCC camp is now open. All cadets are required to register before October 25. The camp will be held from November 10-15 at the Army Cantonment Area.',
    isImportant: true,
    isUnread: true,
  },
  {
    id: '2',
    title: 'Uniform Inspection Next Monday',
    category: 'Parade',
    date: 'October 12, 2023',
    content: 'There will be a uniform inspection next Monday. All cadets are required to wear their complete uniform with proper accessories and polished shoes.',
    isUnread: true,
  },
  {
    id: '3',
    title: 'Republic Day Parade Selection Criteria',
    category: 'Event',
    date: 'October 10, 2023',
    content: 'The selection process for the Republic Day Parade contingent will begin next week. Criteria include discipline record, parade performance, and physical fitness scores.',
    isImportant: false,
  },
  {
    id: '4',
    title: 'National Integration Camp Update',
    category: 'Camp',
    date: 'October 5, 2023',
    content: 'The dates for the National Integration Camp have been finalized. The camp will be held from December 10-20 in New Delhi. Selected cadets will be notified by November 1.',
    isImportant: false,
  },
  {
    id: '5',
    title: 'New NCC Training Schedule',
    category: 'Training',
    date: 'October 3, 2023',
    content: 'The training schedule for the next quarter has been updated. Please check the Resources section for the detailed schedule. Important changes have been made to the weekend training sessions.',
    isImportant: false,
  },
  {
    id: '6',
    title: 'Community Service Project',
    category: 'Social',
    date: 'September 28, 2023',
    content: 'We are organizing a community service project at the local orphanage on October 30. Interested cadets can sign up using the form in the Events section. Participation will earn you community service credits.',
    isImportant: false,
  },
];

const categories = ['All', 'Camp', 'Parade', 'Event', 'Training', 'Social'];

const Announcements: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredAnnouncements = dummyAnnouncements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || announcement.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search announcements..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            Showing {filteredAnnouncements.length} announcements
          </p>
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <Filter className="h-4 w-4 mr-1" />
            Advanced Filter
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnnouncements.map((announcement, index) => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            category={announcement.category}
            date={announcement.date}
            content={announcement.content}
            isImportant={announcement.isImportant}
            isUnread={announcement.isUnread}
          />
        ))}
      </div>
      
      {filteredAnnouncements.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No announcements found. Try adjusting your search or filters.</p>
        </div>
      )}
    </Layout>
  );
};

export default Announcements;
