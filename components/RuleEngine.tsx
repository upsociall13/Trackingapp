import React, { useState } from 'react';

interface RuleEngineProps {
  rules: any[];
  setRules: (rules: any[]) => void;
  onDeploy: (rules: any[]) => void;
}

const RuleEngine: React.FC<RuleEngineProps> = ({ rules, setRules, onDeploy }) => {
  const [ruleName, setRuleName] = useState('');

  const addRule = () => {
    if (ruleName.trim()) {
      const newRule = { id: Date.now(), name: ruleName, active: true };
      setRules([...rules, newRule]);
      setRuleName('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Create Rule</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={ruleName}
            onChange={(e) => setRuleName(e.target.value)}
            placeholder="Rule name"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          />
          <button
            onClick={addRule}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Rule
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Active Rules</h2>
        <ul className="space-y-2">
          {rules.map((rule) => (
            <li key={rule.id} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-slate-700 rounded">
              <input type="checkbox" checked={rule.active} readOnly className="w-4 h-4" />
              <span className="text-gray-900 dark:text-white">{rule.name}</span>
            </li>
          ))}
        </ul>
        {rules.length > 0 && (
          <button
            onClick={() => onDeploy(rules.filter((r) => r.active))}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full"
          >
            Deploy Rules
          </button>
        )}
      </div>
    </div>
  );
};

export default RuleEngine;
