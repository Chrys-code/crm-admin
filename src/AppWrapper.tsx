import App from './App';

import { actions as emailActions } from './store/reducers/email';
import { actions as organisationActions } from './store/reducers/org';
import { actions as userActions } from './store/reducers/user';
import { connect } from 'react-redux';

const { getUser } = userActions;
const { getOrganisation } = organisationActions;
const { setCurrentEmailOrganisation } = emailActions;

export default connect(null, {
  getUser,
  getOrganisation,
  setCurrentEmailOrganisation,
})(App);
