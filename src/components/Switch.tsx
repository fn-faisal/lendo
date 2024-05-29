import React, { useState } from 'react';
import styles from '../styles/Switch.module.scss';

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={[styles.switch, isOn ? styles.active : undefined].join(' ')} onClick={toggleSwitch}>
      <div className={`${styles['switch-handle']} ${isOn ? styles['switch-on'] : styles['switch-off']}`}></div>
    </div>
  );
};

export default Switch;