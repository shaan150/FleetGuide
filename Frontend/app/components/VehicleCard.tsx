import React from 'react';
import styles from '../styles/./VehicleCard.module.css'; // Import the CSS module for styling

interface Vehicle {
  id: number;
  name: string;
  registrationNo: string;
  model: string;
  imageUrl: string;
  labels: string[]; // Array to hold label texts
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className={styles.vehicleCard}>
      <div className={styles.imageContainer}>
        <img src={vehicle.imageUrl} alt={vehicle.name} className={styles.vehicleImage} />
      </div>
      <div className={styles.details}>
        <div className={styles.registration}>{vehicle.registrationNo}</div>
        <div className={styles.model}>{vehicle.model}</div>
        <div className={styles.labels}>
          {vehicle.labels.map((label, index) => (
            <div key={index} className={styles.label}>{label}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
