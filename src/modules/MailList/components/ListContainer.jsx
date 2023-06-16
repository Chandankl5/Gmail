import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMail, selectMailList } from '../../common/ducks/mail'
import List from './List';
import FiltersContainerDesktop from '../../Filters/components/FiltersContainerDesktop';

import { useSearchParams } from 'react-router-dom';
import SearchInputContainer from '../../Search/components/SearchInputContainer';
import filterTagEnums from '../../Filters/constants/FilterTagEnums';
import FiltersContainerMobile from '../../Filters/components/FiltersContainerMobile';

function ListContainer() {

  const dispatch = useDispatch()

  let [searchParams] = useSearchParams();

  const filterBy = searchParams.get('filter_by');
  const word = searchParams.get('word')

  const mailList = useSelector(selectMailList);

  useEffect(() => {
    dispatch(fetchMail());
  }, [dispatch])

  const items = useMemo(() => {

    let filteredItems = mailList;

    if(word) {
      filteredItems =  mailList.filter((item) => item.subject.includes(word))
    }

    if(filterBy) {
      if(filterBy !== filterTagEnums.ALL) {
        filteredItems = filteredItems.filter((item) => item.tag === filterBy)
      }
    }

    return filteredItems;
  
  }, [filterBy, word, mailList])


  return (
    <>
      <div className="mail">
        <FiltersContainerDesktop />
        <FiltersContainerMobile />
        <div className="mail-list">
          <SearchInputContainer />
          <List items={items} />
        </div>
      </div>
    </>
  );
}

export default ListContainer