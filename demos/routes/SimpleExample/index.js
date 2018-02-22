import React from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DiagramWidget,
  LinkModel,
} from 'storm-react-diagrams';
import 'storm-react-diagrams/dist/style.css';
import NodeFactory from '../../../src/controllers/NodeFactory';
import PortFactory from '../../../src/controllers/PortFactory';
import Progress from '../../../src/views/Progress';
import Terminal from '../../../src/views/Terminal';
import Decision from '../../../src/views/Decision';
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
    engine.registerNodeFactory(new NodeFactory('terminal', Terminal, NodeModel));
    engine.registerNodeFactory(new NodeFactory('decision', Decision, NodeModel));
    engine.registerPortFactory(new PortFactory('progress', PortModel));
    engine.registerPortFactory(new PortFactory('terminal', PortModel));
    engine.registerPortFactory(new PortFactory('decision', PortModel));
    const model = new DiagramModel();
    const nodeStart = new NodeModel({ type: 'terminal', category: 'start' });
    const portStart = nodeStart.addPort(new PortModel({ position: 'right' }));
    nodeStart.x = 100;
    nodeStart.y = 100;
    const node1 = new NodeModel({ type: 'progress', content: 'This is a test.' });
    const node1PortLeft = node1.addPort(new PortModel({ position: 'left' }));
    const node1PortRight = node1.addPort(new PortModel({ position: 'right' }));
    node1.x = 400;
    node1.y = 150;
    const node2 = new NodeModel({ type: 'decision', content: 'test' });
    const node2PortLeft = node2.addPort(new PortModel({ position: 'left' }));
    const node2PortRight = node2.addPort(new PortModel({ position: 'right' }));
    node2.x = 700;
    node2.y = 100;
    const nodeEnd = new NodeModel({ type: 'terminal', category: 'end' });
    const portEnd = nodeEnd.addPort(new PortModel({ position: 'left' }));
    nodeEnd.x = 1000;
    nodeEnd.y = 100;
    const link1 = new LinkModel();
    link1.setSourcePort(portStart);
    link1.setTargetPort(node1PortLeft);
    const link2 = new LinkModel();
    link2.setSourcePort(node1PortRight);
    link2.setTargetPort(node2PortLeft);
    const link3 = new LinkModel();
    link3.setSourcePort(node2PortRight);
    link3.setTargetPort(portEnd);
    model.addNode(nodeStart);
    model.addNode(node1);
    model.addNode(node2);
    model.addNode(nodeEnd);
    model.addLink(link1);
    model.addLink(link2);
    model.addLink(link3);
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
