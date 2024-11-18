import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: '工事' | '打ち合わせ' | '検査';
  participants: string[];
  location?: string;
  description?: string;
}

const Schedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events: Event[] = [
    {
      id: 1,
      title: '基礎工事開始',
      date: '2024-03-20',
      time: '09:00',
      type: '工事',
      participants: ['山田健一', '佐藤美咲'],
      location: '新宿区現場A',
      description: '基礎工事の開始。資材の確認と安全チェックを実施。',
    },
    {
      id: 2,
      title: '施主様との進捗確認',
      date: '2024-03-20',
      time: '14:00',
      type: '打ち合わせ',
      participants: ['田中太郎', '鈴木一郎'],
      location: '本社会議室',
      description: '工事の進捗報告と今後のスケジュール確認',
    },
    {
      id: 3,
      title: '電気設備の検査',
      date: '2024-03-20',
      time: '16:00',
      type: '検査',
      participants: ['高橋修', '伊藤直子'],
      location: '渋谷区現場B',
      description: '電気設備の安全検査と動作確認',
    },
  ];

  const typeColors = {
    '工事': 'bg-blue-100 text-blue-800',
    '打ち合わせ': 'bg-green-100 text-green-800',
    '検査': 'bg-purple-100 text-purple-800',
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];

    // 曜日のヘッダー
    const weekDayHeader = weekDays.map(day => (
      <div key={day} className="text-center font-medium text-gray-600 p-2">
        {day}
      </div>
    ));

    // 前月の日付を埋める
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="p-2 bg-gray-50 text-gray-400">
          {getDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)) - firstDay + i + 1}
        </div>
      );
    }

    // 当月の日付
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = new Date().getDate() === i &&
                      new Date().getMonth() === currentDate.getMonth() &&
                      new Date().getFullYear() === currentDate.getFullYear();
      const isSelected = selectedDate.getDate() === i &&
                        selectedDate.getMonth() === currentDate.getMonth() &&
                        selectedDate.getFullYear() === currentDate.getFullYear();

      days.push(
        <button
          key={i}
          onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), i))}
          className={`p-2 relative hover:bg-gray-100 transition-colors ${
            isToday ? 'bg-blue-50' : 'bg-white'
          } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
        >
          <span className={`text-sm ${isToday ? 'text-blue-600 font-semibold' : 'text-gray-900'}`}>
            {i}
          </span>
          {/* イベントの数を示すドット */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
            <div className="w-1 h-1 rounded-full bg-blue-500"></div>
          </div>
        </button>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {currentDate.getFullYear()}年 {monthNames[currentDate.getMonth()]}
          </h2>
          <div className="flex gap-4 items-center">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {weekDayHeader}
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">スケジュール管理</h1>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          <Plus className="w-5 h-5" />
          <span>予定を追加</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          {renderCalendar()}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">本日の予定</h2>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${typeColors[event.type]}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.participants.length}名が参加</span>
                    </div>
                    {event.location && (
                      <p className="text-sm text-gray-600">
                        場所: {event.location}
                      </p>
                    )}
                    {event.description && (
                      <p className="text-sm text-gray-600">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;