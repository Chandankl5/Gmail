import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";

import { selectMailInfoById } from '../../common/ducks/mail'
import MailCard from './MailCard';

function MailCardContainer({
  id
}) {

  const navigate = useNavigate();
  let { tag: searchTag } = useParams();

  const { user, subject, body, tag } = useSelector(selectMailInfoById(id));


  const onClick = useCallback(() => {
    navigate(`/${searchTag}/mail/${id}`)
  }, [])

  return (
    <MailCard
      user={user}
      subject={subject}
      body={body}
      tag={tag}
      onClick={onClick}
    />
  )
}

export default MailCardContainer