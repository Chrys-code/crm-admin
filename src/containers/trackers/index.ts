import TrackersContainer from './trackersContainer';
import { actions as trackerActions } from '../../store/reducers/tracker';
import { connect } from 'react-redux';

const { getTrackers } = trackerActions;

export default connect(null, { getTrackers })(TrackersContainer);
