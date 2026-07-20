import React from 'react';
import { Menu, LogOut, Moon, Sun } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setView: (view: any) => void;
  onLogout: () => void;
  userName: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  role: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  setView,
  onLogout,
  userName,
  isDarkMode,
  toggleDarkMode,
  role,
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'shipments', label: 'Shipments' },
    { id: 'tracking', label: 'Tracking' },
    { id: 'assistant', label: 'AI Assistant' },
    ...(role === 'Agent' ? [{ id: 'rules', label: 'Rule Engine' }] : []),
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-8 text-gray-800 dark:text-white">TrackingApp</h2>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              activeView === item.id
                ? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="border-t border-gray-200 dark:border-slate-700 pt-4 space-y-3">
        <button
          onClick={toggleDarkMode}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-100 text-red-900 hover:bg-red-200 dark:bg-red-900 dark:text-red-100"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
