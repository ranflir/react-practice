import { useState } from 'react';
import styles from './App.css';

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const className = isOn ? `${styles.toggle} ${styles.active}` : styles.toggle;
  const circleClassName = isOn
    ? `${styles.circle} ${styles.active}`
    : styles.circle;

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className={circleClassName}></div>
    </div>
  );
}

export default Toggle;
