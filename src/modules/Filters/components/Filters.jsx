import React from 'react'
import cn from 'classnames';

import '../styles/Filters.css';

function Filters({
  items = [],
  active_filter,
  onClick,
  className
}) {


  return (
    <ul className={cn('filters', className)} onClick={onClick}>
      {items.map((item) => <li className={cn('filter-item', { 'filter-active': active_filter === item})} id={item} key={item}>{item}</li>)}
    </ul>
  )
}

export default Filters