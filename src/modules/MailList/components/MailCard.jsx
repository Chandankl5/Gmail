import React from 'react'

import '../styles/MailCard.css';

function MailCard({
  user,
  subject,
  onClick
}) {
  return (
    <div className="mail-card" onClick={onClick}>
      <div className="col">{user?.name}</div>
      <div className="col-grow">{subject}</div>
    </div>
  )
}

export default MailCard