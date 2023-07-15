import App from './App';

import { actions as organisationActions } from './store/reducers/org';
import { actions as userActions } from './store/reducers/user';
import { actions as emailActions } from './store/reducers/email';
import { actions as trackerActions } from './store/reducers/tracker';
import { connect } from 'react-redux';
import { RootState } from './store/store';

const { getOrganisation } = organisationActions;
const { getUser } = userActions;
const { setCurrentEmailOrganisation } = emailActions;
const { setCurrentTrackerOrganisation } = trackerActions;

const mapState = (state: RootState) => {
  return {
    userOrganisation: state.user.organisation,
  };
};

export default connect(mapState, {
  getUser,
  getOrganisation,
  setCurrentEmailOrganisation,
  setCurrentTrackerOrganisation
})(App);
