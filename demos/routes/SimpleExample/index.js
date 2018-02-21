import React from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DiagramWidget,
  DefaultNodeModel,
  DefaultPortModel,
  LinkModel,
} from 'storm-react-diagrams';
import 'storm-react-diagrams/dist/style.css';
import NodeFactory from '../../../src/controllers/NodeFactory';
import PortFactory from '../../../src/controllers/PortFactory';
import Progress from '../../../src/views/Progress';
import NodeModel from '../../../src/models/NodeModel';
import PortModel from '../../../src/models/PortModel';
import './style.less';

class SimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { engine: undefined };
  }
  componentWillMount() {
    const engine = new DiagramEngine();
    engine.installDefaultFactories();
    engine.registerNodeFactory(new NodeFactory('progress', Progress, NodeModel));
    engine.registerPortFactory(new PortFactory('progress', PortModel));
    const model = new DiagramModel();
    const node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
    const port1 = node1.addPort(new DefaultPortModel(false, 'out-1', 'Out'));
    node1.x = 100;
    node1.y = 100;
    const node2 = new NodeModel({ type: 'progress', content: 'This is a test.' });
    const port2Left = node2.addPort(new PortModel({ position: 'left' }));
    const port2Right = node2.addPort(new PortModel({ position: 'right' }));
    node2.x = 400;
    node2.y = 150;
    const node3 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
    const port3 = node3.addPort(new DefaultPortModel(true, 'in-1', 'IN'));
    node3.x = 700;
    node3.y = 100;
    const link1 = new LinkModel();
    link1.setSourcePort(port1);
    link1.setTargetPort(port2Left);
    const link2 = new LinkModel();
    link2.setSourcePort(port2Right);
    link2.setTargetPort(port3);
    model.addNode(node1);
    model.addNode(node2);
    model.addNode(node3);
    model.addLink(link1);
    model.addLink(link2);
    engine.setDiagramModel(model);
    this.setState({ engine });
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <DiagramWidget diagramEngine={this.state.engine} />
      </div>
    );
  }
}

export default SimpleExample;
