import React from 'react';
import VehicleCard from '../VehicleCard';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  // Example list of vehicles with all required properties
  const vehicles = [
    {
      id: 1,
      name: 'Vehicle 1',
      registrationNo: 'BG67 WYB',
      model: 'Golf 1.6 TDI',
      imageUrl: 'https://i.ebayimg.com/images/g/zEIAAOSwpd9hNTDR/s-l400.jpg', // Replace with actual image URL
      labels: ['5 Door', '5 Seats', 'Diesel', 'Manual']
    },
    {
      id: 2,
      name: 'Vehicle 2',
      registrationNo: 'VN71 RZK',
      model: 'ID 3',
      imageUrl: 'https://i.ebayimg.com/images/g/zEIAAOSwpd9hNTDR/s-l400.jpg',
      labels: ['5 Door', '5 Seats', 'Electric', 'Automatic']
    },
    {
      id: 3,
      name: 'Vehicle 3',
      registrationNo: 'YL57 TXR',
      model: 'Corsa 1.2',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/sco/thumb/1/18/Vauxhall_logo_2019.svg/3135px-Vauxhall_logo_2019.svg.png',
      labels: ['3 Door', '5 Seats', 'Petrol', 'Manual']
    },
    {
        id: 4,
        name: 'Vehicle 3',
        registrationNo: 'YL57 TXR',
        model: 'Corsa 1.2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/sco/thumb/1/18/Vauxhall_logo_2019.svg/3135px-Vauxhall_logo_2019.svg.png',
        labels: ['3 Door', '5 Seats', 'Petrol', 'Manual']
      },
      {
        id: 5,
        name: 'Vehicle 3',
        registrationNo: 'YL57 TXR',
        model: 'Corsa 1.2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/sco/thumb/1/18/Vauxhall_logo_2019.svg/3135px-Vauxhall_logo_2019.svg.png',
        labels: ['3 Door', '5 Seats', 'Petrol', 'Manual']
      },
      {
        id: 6,
        name: 'Vehicle 3',
        registrationNo: 'YL57 TXR',
        model: 'Corsa 1.2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/sco/thumb/1/18/Vauxhall_logo_2019.svg/3135px-Vauxhall_logo_2019.svg.png',
        labels: ['3 Door', '5 Seats', 'Petrol', 'Manual']
      },
  ];

  return (
    <div className={styles.sidebar}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default Sidebar;
