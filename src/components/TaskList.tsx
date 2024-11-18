import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  status: '完了' | '進行中' | '期限超過';
  assignee: string;
  dueDate: string;
}

const TaskList: React.FC = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: '基礎工事の点検',
      status: '完了',
      assignee: '山田 健一',
      dueDate: '今日',
    },
    {
      id: 2,
      title: '電気配線工事',
      status: '進行中',
      assignee: '佐藤 美咲',
      dueDate: '明日',
    },
    {
      id: 3,
      title: '配管システムの確認',
      status: '期限超過',
      assignee: '鈴木 一郎',
      dueDate: '昨日',
    },
  ];

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case '完了':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case '進行中':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case '期限超過':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">最近のタスク</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {tasks.map((task) => (
          <div key={task.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center gap-3">
              {getStatusIcon(task.status)}
              <div>
                <h3 className="text-sm font-medium text-gray-900">{task.title}</h3>
                <p className="text-sm text-gray-500">担当: {task.assignee}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{task.dueDate}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;