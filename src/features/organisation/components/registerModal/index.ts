import OrganisationRegistrationModal from './organisationRegisterModal';

import { actions as orgActions } from '../../../../store/reducers/org';
import { actions as userActions } from '../../../../store/reducers/user';
import { connect } from 'react-redux';

const { createOrganisation } = orgActions;
const { updateUser } = userActions;

export default connect(null, {
  createOrganisation,
  updateUser,
})(OrganisationRegistrationModal);
