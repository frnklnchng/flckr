import { receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Splash from './splash';

const mdp = (dispatch) => {
  return {
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

// export default connect(null, null)(Splash);
// export default connect(() => ({}), () => ({}))(Splash);
export default connect(() => ({}), mdp)(Splash);