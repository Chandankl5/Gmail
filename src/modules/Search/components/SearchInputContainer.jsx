import React, { useCallback, useState} from 'react'
import SearchInput from './SearchInput'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleHambergerMenu } from '../../common/ducks/mail';

function SearchInputContainer() {

  const [ searchValue, setSearchValue ] = useState('')
  const dispatch = useDispatch()

  let [_, setSearchParams] = useSearchParams();

  const onChange = useCallback((e) => {
    setSearchValue(e.target.value)
  }, [searchValue])

  const onClick = useCallback(() => {
    setSearchParams((params) => {
      params.set('word', searchValue)
      return params
    })
  }, [searchValue])

  const toggleMenu = useCallback(() => {
    dispatch(toggleHambergerMenu())
  }, [dispatch])

  return (
    <SearchInput 
      onChange={onChange}
      onClick={onClick}
      toggleMenu={toggleMenu}
    />
  )
}

export default SearchInputContainer