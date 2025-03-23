
import React from 'react';
import Layout from '../components/Layout';
import AchievementCard from '../components/Achievements/AchievementCard';
import { Search, Filter } from 'lucide-react';

const dummyAchievements = [
  {
    id: '1',
    name: 'Arjun Patel',
    rank: 'Senior Under Officer',
    achievements: [
      'Best Cadet Award 2023',
      'Republic Day Camp Selection',
      'Gold in Shooting Competition'
    ],
    score: 95,
    position: 1,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    rank: 'Cadet Captain',
    achievements: [
      'Thal Sainik Camp Selection',
      'Silver in Drill Competition',
      'Outstanding Leadership Award'
    ],
    score: 92,
    position: 2,
  },
  {
    id: '3',
    name: 'Rahul Verma',
    rank: 'Cadet Sergeant',
    achievements: [
      'Best in Physical Fitness',
      'Bronze in Map Reading Contest',
      'Community Service Recognition'
    ],
    score: 88,
    position: 3,
  },
  {
    id: '4',
    name: 'Ananya Desai',
    rank: 'Lance Corporal',
    achievements: [
      'Most Improved Cadet',
      'Cultural Excellence Award',
      'Perfect Attendance'
    ],
    score: 85,
    position: 4,
  },
  {
    id: '5',
    name: 'Vikram Singh',
    rank: 'Cadet Corporal',
    achievements: [
      'Technical Skills Award',
      'Discipline Recognition',
      'Adventure Camp Selection'
    ],
    score: 82,
    position: 5,
  },
  {
    id: '6',
    name: 'Meera Patel',
    rank: 'Cadet',
    achievements: [
      'Academic Excellence',
      'Best First-Year Cadet',
      'Sports Achievement'
    ],
    score: 80,
    position: 6,
  },
];

const Achievements: React.FC = () => {
  return (
    <Layout>
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search cadets..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          
          <button className="flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Top Performing Cadets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyAchievements.slice(0, 3).map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              name={achievement.name}
              rank={achievement.rank}
              achievements={achievement.achievements}
              score={achievement.score}
              position={index + 1}
            />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-6">Notable Mentions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyAchievements.slice(3).map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              name={achievement.name}
              rank={achievement.rank}
              achievements={achievement.achievements}
              score={achievement.score}
              position={index + 4}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Achievements;
