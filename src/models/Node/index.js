import { NodeModel as Model } from 'storm-react-diagrams';
import lodash from 'lodash';
import { defaultProps, TYPE } from './props';

class NodeModel extends Model {
  constructor(props) {
    const ownProps = lodash.clone(defaultProps);
    lodash.merge(ownProps, props);
    super(ownProps[TYPE]);
    this.props = ownProps;
  }
}

export default NodeModel;
