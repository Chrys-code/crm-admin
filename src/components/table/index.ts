import Table from './table';
import { actions as orgActions } from '../../store/reducers/org';
import { actions as emailActions } from '../../store/reducers/email';
import { actions as trackerActions } from '../../store/reducers/tracker';
import { connect } from 'react-redux';

const { getOrganisationUsers } = orgActions;
const { getEmails } = emailActions;
const { getTrackers } = trackerActions;

export default connect(null, { getEmails, getOrganisationUsers, getTrackers })(Table);
