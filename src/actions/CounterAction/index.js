import { createAction } from 'redux-actions';
import { SETCOUNT, DISPOSE } from '../../constants/ActionTypes';
import { defaultProps } from '../../components/Counter/props';

export const setCount = createAction(SETCOUNT);
export const dispose = createAction(DISPOSE);
export const decrease = props => (
  (dispatch, getState) => {
    const { id } = props;
    const state = getState();
    const count = state.getIn(['store', id, 'count']) - 1;
    dispatch(setCount({ id, count }));
  }
);
export const increase = props => (
  (dispatch, getState) => {
    const { id } = props;
    const state = getState();
    const count = state.getIn(['store', id, 'count']) + 1;
    dispatch(setCount({ id, count }));
  }
);
export const willMount = props => (
  (dispatch) => {
    const { id, count = defaultProps.count } = props;
    dispatch(setCount({ id, count }));
  }
);
export const onDispose = props => (
  (dispatch) => {
    const { id } = props;
    dispatch(dispose({ id }));
  }
);
