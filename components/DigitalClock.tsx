import React, { useState, useEffect } from 'react';
import { Globe, Plus, Trash2 } from 'lucide-react';

interface TimeZone {
  id: string;
  name: string;
  offset: string;
}

const DigitalClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeZones, setTimeZones] = useState<TimeZone[]>([
    { id: '1', name: 'New York', offset: '-5' },
    { id: '2', name: 'London', offset: '0' },
    { id: '3', name: 'Tokyo', offset: '+9' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date, offset: number) => {
    const utcTime = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const localTime = new Date(utcTime.getTime() + offset * 3600000);
    return localTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };

  const addTimeZone = () => {
    const newZone: TimeZone = {
      id: Date.now().toString(),
      name: 'New Zone',
      offset: '0'
    };
    setTimeZones([...timeZones, newZone]);
  };

  const removeTimeZone = (id: string) => {
    setTimeZones(timeZones.filter(tz => tz.id !== id));
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Global Time</h2>
          <p className="text-blue-200">Track time across multiple time zones</p>
        </div>
        <Globe className="text-blue-300" size={40} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {timeZones.map(tz => (
          <div key={tz.id} className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-4 border border-blue-300 border-opacity-30">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold">{tz.name}</h3>
              <button
                onClick={() => removeTimeZone(tz.id)}
                className="text-red-400 hover:text-red-300 transition"
              >
                <Trash2 size={18} />
              </button>
            </div>
            <div className="text-3xl font-mono font-bold text-blue-100">
              {formatTime(currentTime, parseInt(tz.offset))}
            </div>
            <div className="text-xs text-blue-300 mt-2">UTC {tz.offset > 0 ? '+' : ''}{tz.offset}</div>
          </div>
        ))}
      </div>

      <button
        onClick={addTimeZone}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
      >
        <Plus size={20} />
        Add Time Zone
      </button>
    </div>
  );
};

export default DigitalClock;
