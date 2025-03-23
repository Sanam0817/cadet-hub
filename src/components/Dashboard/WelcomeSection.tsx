
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WelcomeSectionProps {
  name: string;
  rank: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ name, rank }) => {
  const today = new Date();
  const hours = today.getHours();
  
  let greeting = '';
  if (hours < 12) {
    greeting = 'Good morning';
  } else if (hours < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return (
    <div className="bg-gradient-to-r from-ncc-navy to-ncc-navy/90 rounded-xl shadow-md text-white p-6 sm:p-8 mb-8 opacity-0 animate-fade-in animate-delay-100">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-lg text-white/80">{greeting},</p>
          <h1 className="text-3xl sm:text-4xl font-bold">{name}</h1>
          <p className="text-white/90 font-medium">{rank}</p>
        </div>
        <div className="hidden sm:block">
          <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-2xl font-bold">NU</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-white text-ncc-navy px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
          View Schedule
        </button>
        <button className="flex items-center text-white/80 hover:text-white transition-colors">
          <span>Complete your profile</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;
