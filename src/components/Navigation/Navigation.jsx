import React from 'react';
import styles from "./Navigattion.module.css";

const Navigation = () => {
  
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="../../../public/images/Frame 2 1.png" alt="logo-image" />
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
