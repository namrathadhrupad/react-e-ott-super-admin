import React from "react";

const OttTextfieldSuperAdmin = ({ type, name, placeholder, value, onChange, label }) => {
  return (
    <div className="textFieldContainer">
      {label && (
        <label htmlFor={name} className="textFieldLabel">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="textField"
        id={name}
      />
    </div>
  );
};

export default OttTextfieldSuperAdmin;
