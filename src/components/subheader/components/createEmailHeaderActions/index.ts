import CreateEmailHeaderActions from './createEmailHeaderActions';
import { actions as emailActions } from '../../../../store/reducers/email';
import { connect } from 'react-redux';
const { createEmail, setCurrentEmailGroup, setCurrentEmailTitle } =
  emailActions;
export default connect(null, {
  createEmail,
  setCurrentEmailGroup,
  setCurrentEmailTitle,
})(CreateEmailHeaderActions);
