
import React, { useState } from 'react';
import Layout from '../components/Layout';
import EventCard from '../components/Events/EventCard';
import { Calendar as CalendarIcon, List, Grid, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const dummyEvents = [
  {
    id: '1',
    title: 'Weekly Parade',
    date: 'October 18, 2023',
    time: '09:00 AM - 11:00 AM',
    location: 'University Ground',
    description: 'Regular weekly parade including drill practice, uniform inspection, and physical training.',
    category: 'Parade',
  },
  {
    id: '2',
    title: 'Weapon Training Session',
    date: 'October 20, 2023',
    time: '02:00 PM - 04:00 PM',
    location: 'NCC Room',
    description: 'Introductory session on weapon handling and safety procedures.',
    category: 'Training',
  },
  {
    id: '3',
    title: 'Physical Training & Drill',
    date: 'October 22, 2023',
    time: '08:00 AM - 10:00 AM',
    location: 'Sports Field',
    description: 'Intensive physical training session followed by drill practice for the upcoming competition.',
    category: 'Training',
  },
  {
    id: '4',
    title: 'Adventure Camp Briefing',
    date: 'October 25, 2023',
    time: '12:00 PM - 01:00 PM',
    location: 'Lecture Hall 3',
    description: 'Briefing session about the upcoming adventure camp, including details on equipment and preparation.',
    category: 'Camp',
  },
  {
    id: '5',
    title: 'Map Reading Workshop',
    date: 'October 28, 2023',
    time: '10:00 AM - 01:00 PM',
    location: 'NCC Room',
    description: 'Learn essential map reading and navigation skills with practical exercises.',
    category: 'Workshop',
  },
  {
    id: '6',
    title: 'Community Service Project',
    date: 'October 30, 2023',
    time: '09:00 AM - 03:00 PM',
    location: 'Sunshine Orphanage',
    description: 'Volunteering activity at the local orphanage, involving renovations and spending time with children.',
    category: 'Social',
  }
];

const categories = ['All', 'Parade', 'Training', 'Camp', 'Workshop', 'Social'];

const Events: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentMonth] = useState('October 2023');
  
  const filteredEvents = dummyEvents.filter(event => {
    return selectedCategory === 'All' || event.category === selectedCategory;
  });

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h2 className="text-lg font-medium flex items-center">
              <CalendarIcon className="h-5 w-5 text-gray-600 mr-2" />
              {currentMonth}
            </h2>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 rounded-lg p-1 flex items-center">
              <button
                className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4 text-gray-600" />
              </button>
              <button
                className={`p-1.5 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <List className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            
            <button className="bg-gray-100 p-1.5 rounded-lg">
              <Filter className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="flex space-x-2 overflow-x-auto pb-4">
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
      
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {filteredEvents.map((event, index) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            category={event.category}
          />
        ))}
      </div>
      
      {filteredEvents.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No events found. Try selecting a different category.</p>
        </div>
      )}
    </Layout>
  );
};

export default Events;
