
import React from 'react';
import { Award, Medal, Star } from 'lucide-react';

interface AchievementCardProps {
  name: string;
  rank: string;
  achievements: string[];
  score: number;
  avatar?: string;
  position: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  name,
  rank,
  achievements,
  score,
  avatar,
  position,
}) => {
  // Get position badge based on rank
  const getPositionBadge = () => {
    switch (position) {
      case 1:
        return (
          <div className="absolute -top-1 -right-1 bg-yellow-400 text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md border-2 border-white">
            <Medal className="h-4 w-4" />
          </div>
        );
      case 2:
        return (
          <div className="absolute -top-1 -right-1 bg-gray-300 text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md border-2 border-white">
            <Medal className="h-4 w-4" />
          </div>
        );
      case 3:
        return (
          <div className="absolute -top-1 -right-1 bg-amber-600 text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md border-2 border-white">
            <Medal className="h-4 w-4" />
          </div>
        );
      default:
        return (
          <div className="absolute -top-1 -right-1 bg-white text-gray-500 rounded-full h-8 w-8 flex items-center justify-center shadow-md border-2 border-white">
            <span className="text-sm font-bold">{position}</span>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden card-hover relative opacity-0 animate-fade-in animate-slide-up">
      {getPositionBadge()}
      
      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-ncc-navy/10 flex items-center justify-center text-ncc-navy font-bold text-lg">
            {avatar ? (
              <img src={avatar} alt={name} className="h-full w-full rounded-full" />
            ) : (
              name.slice(0, 2).toUpperCase()
            )}
          </div>
          <div className="ml-3">
            <h3 className="text-base font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{rank}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Performance Score</span>
            <span className="font-semibold">{score}/100</span>
          </div>
          
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full"
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mt-4">
          <span className="text-sm font-medium">Achievements</span>
          <div className="mt-2 space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start">
                <Award className="h-4 w-4 text-ncc-gold mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
