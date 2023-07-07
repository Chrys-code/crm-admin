import App from './App';

import { actions as emailActions } from './store/reducers/email';
import { actions as organisationActions } from './store/reducers/org';
import { actions as userActions } from './store/reducers/user';
import { connect } from 'react-redux';
import { RootState } from './store/store';

const { getUser } = userActions;
const { getOrganisation } = organisationActions;
const { setCurrentEmailOrganisation } = emailActions;

const mapState = (state: RootState) => {
  return {
    userOrganisation: state.user.organisation,
  };
};

export default connect(mapState, {
  getUser,
  getOrganisation,
  setCurrentEmailOrganisation,
})(App);
