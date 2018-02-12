import Immutable from 'immutable';
import createStore from '../src/store/createStore';
import rootReducer from '../src/reducers';

describe('createStore', () => {
  const initialState = Immutable.Map({});
  it('should parse initial state into store', () => {
    const store = createStore(rootReducer, initialState);
    const state = store.getState();
    expect(state).not.toEqual(initialState);
  });
});
