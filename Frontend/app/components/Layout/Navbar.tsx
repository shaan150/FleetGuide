import React from 'react';
import LocationInput from '../LocationInput';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.centeredRow}>
        <div className={styles.locationInputs}>
          <div className={styles.column}>
            <p className={styles.noPadding}>Departure Location</p>
            <LocationInput placeholder="e.g. DE73 7UH" />
            <br></br>
            <a href="#" className={styles.link}>Use Current Location</a>
          </div>
          <div className={styles.column}>
            <p className={styles.noPadding}>Arrival Location</p>
            <LocationInput placeholder="e.g. DE73 7UH" />
          </div>
        </div>
      </div>
      <div className={styles.centeredRow}>
        <button className={styles.calculateButton}>Calculate Best Trip</button>
      </div>
    </nav>
  );
};

export default Navbar;
