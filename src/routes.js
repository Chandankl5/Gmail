import { Navigate } from 'react-router-dom';
import MailList from './modules/MailList/components/ListContainer';
import MailBodyContainer from './modules/MailDetails/components/MailBodyContainer';

const routes = [
  {
    path: '/',
    element: <Navigate replace to='/inbox/mail' />
  },
  {
    path: '/:tag/mail',
    element: <MailList />
  },
  {
    path: '/:tag/mail/:id',
    element: <MailBodyContainer />
  }
]

export default routes;