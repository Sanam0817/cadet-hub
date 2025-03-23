
import React from 'react';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  children,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-border overflow-hidden ${className} opacity-0 animate-fade-in animate-delay-200`}>
      <div className="p-4 sm:p-6 h-full">
        <h2 className="text-lg font-semibold mb-4 text-ncc-navy">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;
