import React from 'react';
import styles from '../styles/LocationInput.module.css'; // Import the CSS module

interface LocationInputProps {
  placeholder: string;
}

const LocationInput: React.FC<LocationInputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.locationInput} // Use the CSS module class
    />
  );
};

export default LocationInput;
