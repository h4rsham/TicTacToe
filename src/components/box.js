import React from 'react';
import './box.css';

export default function Box(value, onClick) {
    const style = value === 'X' ? 'box x' : 'box o';
  return (
    <div className="box">
      <button className={style} onClick={onClick}>{value}</button>
    </div>
  );
}