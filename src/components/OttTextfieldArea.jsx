import React from "react";

const TextFieldArea = ({ type, name, placeholder, value, onChange, label, disabled }) => {

  return (
    <div className="input-group mb-3">
        <label for="exampleFormControlInput" className="form-label">
          {label}
          </label>
      <input 
          type={type}   
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id="exampleFormControlInput1"
          disabled={disabled}
          className="form-control"
        />
    </div>
  );
};

export default TextFieldArea;
