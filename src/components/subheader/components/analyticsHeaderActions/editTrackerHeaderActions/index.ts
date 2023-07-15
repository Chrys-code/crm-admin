import EditTrackerHeaderActions from './editTrackerHeaderActions'
import { actions as trackerActions } from '../../../../../store/reducers/tracker';
import { connect } from 'react-redux';

const {
    getTrackers,
    createTracker,
    updateTracker,
    clearCurrentTracker,
} = trackerActions;

export default connect(null, {
    getTrackers,
    updateTracker,
    createTracker,
    clearCurrentTracker
})(EditTrackerHeaderActions);
