import React from "react";

const Select = ({ name, label, value, error, ...rest }) => {
  return (
    <div className="input-group mb-3">
      <label className="label-genre" htmlFor={name}>
        {label}
        <select className="custom-select" id={name} name={name} {...rest}>
          <option value={value}></option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
        </select>
      </label>
    </div>
  );
};

export default Select;
