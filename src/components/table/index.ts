import Table from './table';
import { actions as emailActions } from '../../store/reducers/email';
import { connect } from 'react-redux';

const { getEmails } = emailActions;

export default connect(null, { getEmails })(Table);
