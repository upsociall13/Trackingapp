import React from 'react';

interface TrackingDetailProps {
  shipment: any;
  onUpdate: (shipment: any) => void;
}

const TrackingDetail: React.FC<TrackingDetailProps> = ({ shipment, onUpdate }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{shipment.id}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Vessel Name</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{shipment.vesselName}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Status</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{shipment.status}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Origin</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{shipment.origin}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Destination</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{shipment.destination}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingDetail;
