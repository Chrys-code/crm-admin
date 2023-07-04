import CreateEmailHeaderActions from './createEmailHeaderActions';
import { actions as emailActions } from '../../../../store/reducers/email';
import { connect } from 'react-redux';
import { RootState } from '../../../../store/store';
import { getGroups } from './helpers';

const mapState = (state: RootState) => {
  return {
    groups: getGroups(state.email.emails),
  };
};

const { createEmail, setCurrentEmailGroup, setCurrentEmailTitle } =
  emailActions;

export default connect(mapState, {
  createEmail,
  setCurrentEmailGroup,
  setCurrentEmailTitle,
})(CreateEmailHeaderActions);
