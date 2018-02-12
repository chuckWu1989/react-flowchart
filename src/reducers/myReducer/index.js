import { handleActions } from 'redux-actions';
import myModel from '../../models/myModel';
import { SETCOUNT, DISPOSE } from '../../constants/ActionTypes';

export default handleActions({
  [SETCOUNT]: (state, { payload }) => (
    state.setIn([payload.id, 'count'], payload.count)
  ),
  [DISPOSE]: (state, { payload }) => (
    state.delete(payload.id)
  ),
}, myModel);
