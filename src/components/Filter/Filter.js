import React from "react";
import "./Filter.css";

const Filter = ({ filterCategory, cat, ind, filterIndustry }) => {
  return (
    <div className="filters">
      <label htmlFor="filter-category">Show me</label>
      <select defaultValue={cat} onChange={filterCategory} id="filter-category">
        <option value="all">all categories</option>
        <option value="strategy">Strategy</option>
        <option value="banking">Banking</option>
        <option value="media">Media</option>
      </select>
      <label htmlFor="filter-industry">in</label>
      <select defaultValue={ind} onChange={filterIndustry} id="filter-industry">
        <option value="all">all industries</option>
        <option value="b2b">B2B</option>
        <option value="food">FOOD</option>
        <option value="travel">TRAVEL</option>
      </select>
    </div>
  );
};

export default Filter;
