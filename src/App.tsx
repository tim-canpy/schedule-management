import React from 'react';
import { Building2, Calendar, Users, CheckCircle2 } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ProjectCard from './components/ProjectCard';
import TaskList from './components/TaskList';

function App() {
  const projects = [
    {
      title: '新築マンション建設プロジェクト',
      progress: 75,
      dueDate: '2024年9月30日',
      teamSize: 12,
      status: '順調' as const,
    },
    {
      title: 'オフィスビルリノベーション',
      progress: 45,
      dueDate: '2024年8月15日',
      teamSize: 8,
      status: '要注意' as const,
    },
    {
      title: '住宅団地開発プロジェクト',
      progress: 30,
      dueDate: '2024年10月20日',
      teamSize: 15,
      status: '遅延' as const,
    },
  ];

  const stats = [
    { 
      label: '進行中のプロジェクト', 
      value: '12',
      icon: <Building2 className="w-6 h-6 text-blue-600" />
    },
    { 
      label: '進行中のタスク', 
      value: '48',
      icon: <Calendar className="w-6 h-6 text-blue-600" />
    },
    { 
      label: 'チームメンバー', 
      value: '32',
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    { 
      label: '今月の完了プロジェクト', 
      value: '8',
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <Header />

        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">進行中のプロジェクト</h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <TaskList />
      </div>
    </div>
  );
}

export default App;