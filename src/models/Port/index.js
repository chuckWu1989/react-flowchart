import { PortModel as Model, DefaultLinkModel } from 'storm-react-diagrams';
import lodash from 'lodash';
import { defaultProps, POS } from './props';

class PortModel extends Model {
  constructor(props) {
    const ownProps = lodash.clone(defaultProps);
    lodash.merge(ownProps, props);
    super(ownProps[POS]);
    this[POS] = ownProps[POS];
  }
  serialize = () => (
    lodash.merge(super.serialize(), {
      position: this[POS],
    })
  )
  deSerialize = (data) => {
    super.deSerialize(data);
    this[POS] = data.position;
  };
  link(port) {
    const link = this.createLinkModel();
    link.setSourcePort(this);
    link.setTargetPort(port);
    return link;
  }
  createLinkModel() {
    const link = super.createLinkModel();
    return link || new DefaultLinkModel();
  }
}

export default PortModel;
