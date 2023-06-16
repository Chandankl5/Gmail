import React, { useCallback } from 'react'
import cn from 'classnames';

import Filters from './Filters';
import { useSearchParams } from 'react-router-dom';

import filterTagEnums from '../constants/FilterTagEnums';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsMenuOpen, toggleHambergerMenu } from '../../common/ducks/mail';

function FiltersContainerMobile() {

  const dispatch = useDispatch()

  let [searchParams, setSearchParams] = useSearchParams();

  const menuOpen = useSelector(selectIsMenuOpen)

  const items = Object.values(filterTagEnums);

  const onClick = useCallback((e) => {
    const itemId = e.target.id;
    setSearchParams((params) => {
      params.set('filter_by', itemId);
      return params;
    })
  }, [setSearchParams])

  const onClose = useCallback(() => {
    dispatch(toggleHambergerMenu())
  }, [])

  return (
    <div className='menu-wrapper'>
      <div className={cn("hamberger-menu", { hide: !menuOpen })}>
        <button className='cta' onClick={onClose}>Close</button>
        <Filters
          className={cn("filters-mobile", { hide: !menuOpen })}
          items={items}
          onClick={onClick}
          active_filter={searchParams.get("filter_by")}
        />
      </div>
    </div>
  );
}

export default FiltersContainerMobile