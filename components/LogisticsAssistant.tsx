import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface LogisticsAssistantProps {
  shipments: any[];
  user: any;
}

const LogisticsAssistant: React.FC<LogisticsAssistantProps> = ({ shipments, user }) => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }]);
      setInput('');
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'I can help you with your shipment tracking. How can I assist?' },
        ]);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-800 rounded-lg shadow">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 dark:border-slate-600 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about your shipments..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogisticsAssistant;
