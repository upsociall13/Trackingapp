import React from 'react';

interface DashboardProps {
  shipments: any[];
  onTrack: (shipment: any) => void;
  userRole: string;
  onRoleChange: (role: string) => void;
  onNavigateToRules: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  shipments,
  onTrack,
  userRole,
  onRoleChange,
  onNavigateToRules,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Shipments</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{shipments.length}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Active Role</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{userRole}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Delivered</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {shipments.filter((s) => s.status === 'Delivered').length}
          </p>
        </div>
      </div>

      {userRole === 'Customer' && (
        <button
          onClick={() => onRoleChange('Agent')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Switch to Agent View
        </button>
      )}

      {userRole === 'Agent' && (
        <button
          onClick={onNavigateToRules}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Configure Rules
        </button>
      )}
    </div>
  );
};

export default Dashboard;
