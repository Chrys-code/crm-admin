import EmailTemplatesContainer from './emailTemplatesContainer';
import { actions as emailActions } from '../../store/reducers/email';
import { connect } from 'react-redux';

const { getEmails } = emailActions;

export default connect(null, { getEmails })(EmailTemplatesContainer);
