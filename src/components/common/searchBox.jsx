import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className="form-control my-3"
      name="query"
      type="search"
      placeholder="Search"
      aria-label="Search"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
