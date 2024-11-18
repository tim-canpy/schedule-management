import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  progress: number;
  dueDate: string;
  teamSize: number;
  status: '順調' | '要注意' | '遅延';
}

const statusColors = {
  '順調': 'bg-green-100 text-green-800',
  '要注意': 'bg-yellow-100 text-yellow-800',
  '遅延': 'bg-red-100 text-red-800',
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  progress,
  dueDate,
  teamSize,
  status,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600">進捗状況</span>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 rounded-full h-2 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{dueDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>{teamSize}名</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;