import React from 'react'

function Selectmenu() {
    return (
        <select className="filter-by-region absolute  left-[625px] top-[113px]">
      <option hidden="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
    )
}

export default Selectmenu
