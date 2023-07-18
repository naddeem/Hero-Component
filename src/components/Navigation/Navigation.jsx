import React from 'react';
import styles from "./Navigattion.module.css";

const Navigation = () => {
  
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="https://www.bing.com/images/blob?bcid=RDmvwVtoQtkFNdUpmsXT-FRhUEmv.....60" alt="logo-image" />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
