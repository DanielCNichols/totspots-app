import React from 'react';
import s from './ToggleSwitch.module.css';

const ToggleSwitch = ({ toggleMap, showMap }) => {
  return (
    <div className={s.toggleSwitch}>
      <input
        type="checkbox"
        name="mapToggle"
        className={s.toggleSwitchInput}
        id="toggleBox"
        tabIndex="0"
        onClick={() => toggleMap(!showMap)}
      />
      <label className={s.toggleSwitchLabel} htmlFor="toggleBox">
        <span className={s.toggleSwitchInner}></span>
        <span className={s.toggleSwitchSwitch}></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
