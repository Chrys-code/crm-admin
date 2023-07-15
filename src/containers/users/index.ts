import UsersContainer from './usersContainer';
import { actions as orgActions } from '../../store/reducers/org';
import { connect } from 'react-redux';

const { getOrganisationUsers } = orgActions;

export default connect(null, { getOrganisationUsers })(UsersContainer);
