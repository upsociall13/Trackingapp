
import { Shipment } from './types';

export const COLORS = {
  maerskBlue: '#73C7E6',
  maerskDark: '#00243D',
  maerskGrey: '#5A6B7C',
};

const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
};

const generateShipments = (count: number, origin: string, originCode: string, destination: string, destinationCode: string, startId: number): Shipment[] => {
  const statuses: any[] = ['At Sea', 'Pending', 'Loading', 'Delivered', 'Out for Delivery', 'Customs Clearance'];
  const vessels = ['Maersk Mc-Kinney Moller', 'Maersk Edmonton', 'Maersk McKinney', 'Maersk Oceanic Pride', 'Maersk Rhine Explorer'];
  
  return Array.from({ length: count }).map((_, i) => {
    const idNum = startId + i;
    const status = i % 7 === 0 ? 'Delayed' : (i % 11 === 0 ? 'Exception' : statuses[i % statuses.length]);
    const departure = randomDate(new Date(2026, 3, 1), new Date(2026, 4, 15));
    const arrival = randomDate(new Date(2026, 5, 1), new Date(2026, 6, 30));
    const voyageNum = `${Math.floor(Math.random() * 800 + 100)}${['N', 'S', 'E', 'W'][i % 4]}`;
    const payRef = `${Math.floor(Math.random() * 9000000000 + 1000000000)} /${Math.floor(Math.random() * 90000000 + 10000000)}`;
    
    const shipment: Shipment = {
      id: String(6500000000 + startId + i),
      vesselName: vessels[i % vessels.length],
      voyageDirection: voyageNum,
      paymentReference: payRef,
      placeOfReceipt: `${origin}, IN`,
      portOfLoading: `${origin}, IN`,
      portOfDischarge: `${destination}, DE`,
      placeOfDelivery: `${destination}, DE`,
      origin,
      originCode,
      destination,
      destinationCode,
      status,
      departureDate: departure,
      estimatedArrival: arrival,
      containerCount: Math.floor(Math.random() * 8) + 1,
      weight: `${(Math.random() * 60000 + 5000).toLocaleString(undefined, { maximumFractionDigits: 0 })} kg`,
      contents: i % 2 === 0 ? 'Standard Machinery' : 'Automotive Electronics',
      trackingHistory: [
        { date: departure, location: origin, description: 'Container loaded onto vessel at port of origin', completed: true }
      ]
    };

    if (status === 'Delayed') {
      shipment.delayReason = 'Sorting Facility Congestion';
      shipment.delayTime = '24 Hours';
    } else if (status === 'Exception') {
      shipment.delayReason = 'International Customs Hold';
      shipment.delayTime = '3 Days';
    }

    return shipment;
  });
};

export const SPECIAL_SHIPMENT_MAERSK: Shipment = {
  id: '2601373963',
  vesselName: 'MAERSK VIRGINIA(HK)',
  voyageDirection: '629S',
  paymentReference: '7553319001 /10141358',
  placeOfReceipt: 'Gdansk, PL',
  portOfLoading: 'Gdansk, PL',
  portOfDischarge: 'Valencia, ES',
  placeOfDelivery: 'Valencia, ES',
  origin: 'Gdansk, Poland',
  originCode: 'GDN',
  destination: 'Valencia, Spain',
  destinationCode: 'VLC',
  status: 'Loading',
  departureDate: '2026-07-19',
  estimatedArrival: '2026-08-17',
  containerCount: 12,
  weight: '24,500 kg',
  contents: 'Industrial Machinery Parts',
  trackingHistory: [
    { date: '2026-07-14', location: 'Gdansk, PL', description: 'Customs inspections cleared & container staging completed', completed: true },
    { date: '2026-07-12', location: 'Gdansk, PL', description: 'Booking received and empty containers dispatched to shipper', completed: true }
  ]
};

export const MOCK_SHIPMENTS: Shipment[] = [
  SPECIAL_SHIPMENT_MAERSK,
  ...generateShipments(10, 'New Delhi, India', 'DEL', 'Frankfurt, Germany', 'FRA', 101000),
  ...generateShipments(10, 'Singapore, SG', 'SIN', 'Los Angeles, USA', 'LAX', 202000),
  ...generateShipments(10, 'Shanghai, China', 'PVG', 'London, UK', 'LHR', 303000),
  ...generateShipments(10, 'New York, USA', 'JFK', 'Tokyo, Japan', 'NRT', 404000),
];
