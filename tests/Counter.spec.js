import React from 'react';
import Immutable from 'immutable';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import Counter from '../src/components/Counter';
import { defaultProps } from '../src/components/Counter/props';
import { mapStateToProps, mapDispatchToProps } from '../src/containers/CounterContainer';
import * as actions from '../src/actions/CounterAction';
import * as actionTypes from '../src/constants/ActionTypes';

global.configure({ adapter: new Adapter() });

let store;
const props = { id: 'test' };
const mockStore = configureStore([thunk]);

describe('Counter', () => {
  describe('component', () => {
    it('should render correctly', () => {
      const ownProps = {
        ...props,
        count: 5,
        increase: response => response,
        decrease: response => response,
        willMount: response => response,
        onDispose: response => response,
      };
      const tree = toJson(global.shallow(<Counter {...ownProps} />));
      expect(tree).toMatchSnapshot();
    });
    it('should call handlers while component goes through lifecycle', () => {
      const ownProps = {
        ...props,
        willMount: jest.fn(),
        onDispose: jest.fn(),
      };
      const wrapper = global.shallow(
        <Counter {...ownProps} />,
        { lifecycleExperimental: true },
      );
      wrapper.unmount();
      expect(ownProps.willMount).toHaveBeenCalled();
      expect(ownProps.onDispose).toHaveBeenCalled();
    });
  });
  describe('container', () => {
    let mapState;
    let mapDispatch;
    beforeAll(() => {
      store = mockStore(Immutable.Map({}));
      mapState = mapStateToProps(store.getState(), props);
      mapDispatch = mapDispatchToProps(store.dispatch, props);
    });
    describe('mapStateToProps', () => {
      it('should pass count', () => {
        expect('count' in mapState).toBeTruthy();
      });
    });
    describe('mapDispatchToProps', () => {
      it('should pass willMount', () => {
        expect('willMount' in mapDispatch).toBeTruthy();
      });
      it('should pass increase', () => {
        expect('increase' in mapDispatch).toBeTruthy();
      });
      it('should pass decrease', () => {
        expect('decrease' in mapDispatch).toBeTruthy();
      });
      it('should pass onDispose', () => {
        expect('onDispose' in mapDispatch).toBeTruthy();
      });
    });
  });
  describe('action', () => {
    const count = 5;
    beforeEach(() => {
      store = mockStore(Immutable.Map({}).setIn(['store', props.id, 'count'], count));
    });
    describe('setCount', () => {
      it('should have properly action name', () => {
        const action = actions.setCount();
        expect(action.type).toBe(actionTypes.SETCOUNT);
      });
    });
    describe('dispose', () => {
      it('should have properly action name', () => {
        const action = actions.dispose();
        expect(action.type).toBe(actionTypes.DISPOSE);
      });
    });
    describe('willMount', () => {
      it('should set count into store if count is defined', () => {
        const ownProps = { ...props, count: 10 };
        store.dispatch(actions.willMount(ownProps));
        expect(store.getActions()[0].payload.count).toBe(10);
      });
      it('should set count as default if count is undefined', () => {
        store.dispatch(actions.willMount(props));
        expect(store.getActions()[0].payload.count).toBe(defaultProps.count);
      });
    });
    describe('increase', () => {
      it('should increase count', () => {
        store.dispatch(actions.increase(props));
        expect(store.getActions()[0].payload.count).toBe(count + 1);
      });
    });
    describe('decrease', () => {
      it('should decrease count', () => {
        store.dispatch(actions.decrease(props));
        expect(store.getActions()[0].payload.count).toBe(count - 1);
      });
    });
    describe('onDispose', () => {
      it('should relase data by id', () => {
        store.dispatch(actions.onDispose(props));
        expect(store.getActions()[0].payload.id).toBe(props.id);
      });
    });
  });
});
