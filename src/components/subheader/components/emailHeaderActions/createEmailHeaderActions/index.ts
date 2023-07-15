import CreateEmailHeaderActions from './createEmailHeaderActions';
import { actions as emailActions } from '../../../../../store/reducers/email';
import { connect } from 'react-redux';
import { RootState } from '../../../../../store/store';

const mapState = (state: RootState) => {
  return {
    groups: state.email.groups,
  };
};

const {
  createEmail,
  updateEmail,
  getEmails,
  setCurrentEmailGroup,
  setCurrentEmailTitle,
  setCurrentEmailId,
  extendGroups,
  clearCurrentEmail,
} = emailActions;

export default connect(mapState, {
  extendGroups,
  createEmail,
  updateEmail,
  getEmails,
  setCurrentEmailGroup,
  setCurrentEmailTitle,
  setCurrentEmailId,
  clearCurrentEmail,
})(CreateEmailHeaderActions);
