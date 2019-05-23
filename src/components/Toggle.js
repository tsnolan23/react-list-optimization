import React from "react";

const Toggle = ({ onChange, isChecked }) => (
  <div className="toggle" onClick={() => onChange(!isChecked)}>
    <div className="toggle__label">Enable Optimzation?</div>
    <div className="toggle__input">
      <div
        className={`toggle__indicator toggle__indicator--${
          isChecked ? "checked" : "not-checked"
        }`}
      />
    </div>
  </div>
);

export default Toggle;
