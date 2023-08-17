"use client"
import React, { useState } from 'react';
import styles from './message.module.css';

const Message = () => {
  const [divposition, setDivPosition] = useState(0);

  const toggleDivPosition = () => {
    setDivPosition(divposition === 0 ? 1 : 0);
  };

  return (
    <div className={`${styles.maindiv} ${divposition === 0 ? styles.bottom1 : styles.bottom10}`}>
      <div className={styles.header}>
        <h1 className={styles.mainheading}>Messages</h1>
        <button className={styles.updown} onClick={toggleDivPosition}>
          {divposition === 0 ? '^^' : 'X'}
        </button>
      </div>
    </div>
  );
};

export default Message;
