import { connect } from 'react-redux';
import Counter from '../../components/Counter';
import { willMount, increase, decrease, onDispose } from '../../actions/CounterAction';

export const mapStateToProps = (state, props) => ({
  count: state.getIn(['store', props.id, 'count']),
});
export const mapDispatchToProps = (dispatch, props) => ({
  willMount: () => dispatch(willMount(props)),
  increase: () => dispatch(increase(props)),
  decrease: () => dispatch(decrease(props)),
  onDispose: () => dispatch(onDispose(props)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
