import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FolderKanban, 
  MessageSquare, 
  Bell, 
  Settings,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'ダッシュボード', path: '/', active: true },
    { icon: <Calendar className="w-5 h-5" />, label: 'スケジュール', path: '/schedule' },
    { icon: <Users className="w-5 h-5" />, label: 'チーム', path: '/team' },
    { icon: <FolderKanban className="w-5 h-5" />, label: 'プロジェクト', path: '/projects' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'チャット', path: '/chat' },
    { icon: <Bell className="w-5 h-5" />, label: '通知', path: '/notifications' },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <FolderKanban className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">BuildFlow</h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800 transition-colors ${
              item.active ? 'bg-slate-800' : ''
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800 transition-colors">
          <Settings className="w-5 h-5" />
          <span>設定</span>
        </button>
        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800 transition-colors text-red-400">
          <LogOut className="w-5 h-5" />
          <span>ログアウト</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;