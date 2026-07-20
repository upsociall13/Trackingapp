import React from 'react';

interface ShipmentListProps {
  shipments: any[];
  onTrack: (shipment: any) => void;
}

const ShipmentList: React.FC<ShipmentListProps> = ({ shipments, onTrack }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Vessel</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.id} className="border-b border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700">
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{shipment.id}</td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{shipment.vesselName}</td>
              <td className="px-6 py-4 text-sm">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  shipment.status === 'Delivered'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : shipment.status === 'Delayed'
                    ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {shipment.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm">
                <button
                  onClick={() => onTrack(shipment)}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  Track
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentList;
