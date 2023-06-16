import React from 'react'
import MailCardContainer from './MailCardContainer'

import '../styles/MailList.css'

function List({
  items = []
}) {
  return (
    <>
    {items.map(({id}) => <MailCardContainer key={id} id={id} />)}
    </>
  )
}

export default List