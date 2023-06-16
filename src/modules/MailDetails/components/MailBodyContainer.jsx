import React, {useCallback, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SearchInputContainer from '../../Search/components/SearchInputContainer';
import MailBody from './MailBody';
import FiltersContainerDesktop from '../../Filters/components/FiltersContainerDesktop';
import FiltersContainerMobile from '../../Filters/components/FiltersContainerMobile';

import { useDispatch, useSelector } from 'react-redux';
import { selectMailInfoById } from '../../common/ducks/mail';
import { fetchMail } from '../../common/ducks/mail'

function MailBodyContainer() {

  const dispatch = useDispatch()
  let navigate = useNavigate();

  let { id } = useParams();

  const { user, subject, body } = useSelector(selectMailInfoById(parseInt(id))) || {}; 

  useEffect(() => {
    dispatch(fetchMail());
  }, [dispatch])

  const onClick = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <>
    <div className="mail">
      <FiltersContainerDesktop />
      <FiltersContainerMobile />
      <div className="mail-body">
        <SearchInputContainer />
        <MailBody
          user={user}
          subject={subject}
          body={body}
          onClick={onClick}
        />
      </div>
    </div>
  </>
  )
}

export default MailBodyContainer