import EditUserHeaderActions from './editUserHeaderActions'
import { actions as orgActions } from '../../../../../store/reducers/org';
import { connect } from 'react-redux';

const {
    getOrganisation,
    clearCurrentUser
} = orgActions;

export default connect(null, {
    getOrganisation,
    clearCurrentUser
})(EditUserHeaderActions);
