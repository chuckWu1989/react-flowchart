import { NodeFactory as Factory } from 'storm-react-diagrams';

class NodeFactory extends Factory {
  constructor(type, WidgetFacotry, NodeModel) {
    super(type);
    this.WidgetFacotry = WidgetFacotry;
    this.NodeModel = NodeModel;
  }
  generateReactWidget = (diagramEngine, { props, ...node }) => (
    this.WidgetFacotry({ node, ...props })
  )
  getNewInstance = () => new this.NodeModel();
}

export default NodeFactory;
