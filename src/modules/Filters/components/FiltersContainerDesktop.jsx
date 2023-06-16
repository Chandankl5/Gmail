import React, { useCallback } from 'react'
import FiltersDesktop from './Filters';
import { useSearchParams } from 'react-router-dom';

import filterTagEnums from '../constants/FilterTagEnums';

function FiltersContainerDesktop() {

  let [searchParams, setSearchParams] = useSearchParams();

  const items = Object.values(filterTagEnums);

  const onClick = useCallback((e) => {
    const itemId = e.target.id;
    setSearchParams((params) => {
      params.set('filter_by', itemId);
      return params;
    })
  }, [setSearchParams])

  return (
   <FiltersDesktop 
    className='filters-desktop'
    items={items} 
    onClick={onClick}
    active_filter={searchParams.get('filter_by')}
   />
  )
}

export default FiltersContainerDesktop