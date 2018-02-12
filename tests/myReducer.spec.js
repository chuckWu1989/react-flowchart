import Immutable from 'immutable';
import myReducer from '../src/reducers/myReducer';
import * as actions from '../src/actions/CounterAction';

const payload = { id: 'test', count: 5 };

describe('myReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = Immutable.Map({});
  });
  it('should handle setCount', () => {
    const result = myReducer(initialState, actions.setCount(payload));
    expect(result.getIn([payload.id, 'count'])).toBe(payload.count);
  });
  it('should handle onDispose', () => {
    initialState = Immutable.Map({}).setIn([payload.id, 'count'], payload.count);
    const result = myReducer(initialState, actions.dispose(payload));
    expect(result.get(payload.id)).toBeUndefined();
  });
});
