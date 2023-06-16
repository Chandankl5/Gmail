import React from 'react'

import '../styles/MailBody.css';

function MailBody({
  user,
  subject,
  body,
  onClick
}) {
  return (
   <div className="mail-body">
    <button className='cta' onClick={onClick}>Back</button>
    <div className="subject">{subject}</div>
    <div className="sub-title">{user?.name}</div>
    <div className='content'>{body}</div>
   </div> 
  )
}

export default MailBody