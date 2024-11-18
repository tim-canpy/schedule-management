import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">ダッシュボード</h1>
        <p className="text-gray-600">ようこそ戻りました、田中さん</p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="プロジェクトを検索..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        
        <button className="relative hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>
        
        <button className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <UserCircle className="w-8 h-8 text-gray-600" />
          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">田中 太郎</p>
            <p className="text-xs text-gray-500">現場監督</p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;