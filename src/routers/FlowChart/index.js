import { connect } from '../../hocs/connect';
import { getEngine, updateEngine } from '../../controllers/FlowChart';
import FlowChart from '../../views/FlowChart';

const method = props => ({
  getEngine: () => getEngine(props),
  updateEngine: nextProps => updateEngine(nextProps, props),
});

export default connect(method)(FlowChart);
