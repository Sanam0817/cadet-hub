
import React from 'react';
import { Calendar, Users, Award, Book } from 'lucide-react';
import Layout from '../components/Layout';
import WelcomeSection from '../components/Dashboard/WelcomeSection';
import DashboardCard from '../components/Dashboard/DashboardCard';
import StatCard from '../components/Dashboard/StatCard';
import AnnouncementPreview from '../components/Dashboard/AnnouncementPreview';
import EventsTimeline from '../components/Dashboard/EventsTimeline';

const announcements = [
  {
    id: '1',
    title: 'Annual NCC Camp Registration Open',
    category: 'Camp',
    date: 'October 15, 2023',
    isNew: true,
  },
  {
    id: '2',
    title: 'Uniform Inspection Next Monday',
    category: 'Parade',
    date: 'October 12, 2023',
  },
  {
    id: '3',
    title: 'Republic Day Parade Selection Criteria',
    category: 'Event',
    date: 'October 10, 2023',
  },
];

const events = [
  {
    id: '1',
    title: 'Weekly Parade',
    date: 'Oct 18, 2023',
    time: '09:00 AM - 11:00 AM',
    location: 'University Ground',
    isPriority: true,
  },
  {
    id: '2',
    title: 'Weapon Training Session',
    date: 'Oct 20, 2023',
    time: '02:00 PM - 04:00 PM',
    location: 'NCC Room',
  },
  {
    id: '3',
    title: 'Physical Training & Drill',
    date: 'Oct 22, 2023',
    time: '08:00 AM - 10:00 AM',
    location: 'Sports Field',
  },
];

const Index: React.FC = () => {
  return (
    <Layout>
      <WelcomeSection name="Cadet Arjun Patel" rank="Senior Under Officer" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Attendance" 
          value="87%" 
          icon={Calendar}
          trend={{ value: 5, positive: true }}
          className="animate-delay-100"
        />
        <StatCard 
          title="Training Hours" 
          value="32" 
          icon={Book}
          trend={{ value: 12, positive: true }}
          className="animate-delay-200"
        />
        <StatCard 
          title="Upcoming Events" 
          value="6" 
          icon={Calendar}
          className="animate-delay-300"
        />
        <StatCard 
          title="Active Cadets" 
          value="58" 
          icon={Users}
          className="animate-delay-400"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <DashboardCard title="Upcoming Events">
            <EventsTimeline events={events} />
          </DashboardCard>
        </div>
        
        <div className="lg:col-span-1">
          <DashboardCard title="Recent Announcements">
            <AnnouncementPreview announcements={announcements} />
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
