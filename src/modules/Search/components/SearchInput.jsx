import React from 'react'
import '../styles/Search.css'

function SearchInput({
  onChange,
  onClick,
  toggleMenu
}) {

  return (
    <div className="search-input-wrapper">
      <button className='toggle-cta cta' onClick={toggleMenu}>Menu</button>
      <input className='search-input' type="search" name="search" id="search" onChange={onChange} />
      <button className='cta' onClick={onClick}>Search</button>
    </div>
  )
}

export default React.memo(SearchInput)