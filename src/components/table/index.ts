import Table from './table';
import { actions as emailActions } from '../../store/reducers/email';
import { actions as orgActions } from '../../store/reducers/org';
import { connect } from 'react-redux';

const { getEmails } = emailActions;
const { getOrganisationUsers } = orgActions;

export default connect(null, { getEmails, getOrganisationUsers })(Table);
