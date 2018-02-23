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
import Documents from '../../../src/views/Documents';
import Data from '../../../src/views/Data';
import DataBase from '../../../src/views/DataBase';
import Connect from '../../../src/views/Connect';
import SubRoutine from '../../../src/views/SubRoutine';
import OffPage from '../../../src/views/OffPage';
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
    engine.registerNodeFactory(new NodeFactory('documents', Documents, NodeModel));
    engine.registerNodeFactory(new NodeFactory('data', Data, NodeModel));
    engine.registerNodeFactory(new NodeFactory('database', DataBase, NodeModel));
    engine.registerNodeFactory(new NodeFactory('connect', Connect, NodeModel));
    engine.registerNodeFactory(new NodeFactory('subroutine', SubRoutine, NodeModel));
    engine.registerNodeFactory(new NodeFactory('offpage', OffPage, NodeModel));
    engine.registerPortFactory(new PortFactory('progress', PortModel));
    engine.registerPortFactory(new PortFactory('terminal', PortModel));
    engine.registerPortFactory(new PortFactory('decision', PortModel));
    engine.registerPortFactory(new PortFactory('documents', PortModel));
    engine.registerPortFactory(new PortFactory('data', PortModel));
    engine.registerPortFactory(new PortFactory('database', PortModel));
    engine.registerPortFactory(new PortFactory('connect', PortModel));
    engine.registerPortFactory(new PortFactory('subroutine', PortModel));
    engine.registerPortFactory(new PortFactory('offpage', PortModel));
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
    const node3 = new NodeModel({ type: 'documents' });
    const node3PortLeft = node3.addPort(new PortModel({ position: 'left' }));
    const node3PortRight = node3.addPort(new PortModel({ position: 'right' }));
    node3.x = 1000;
    node3.y = 100;
    const node4 = new NodeModel({ type: 'data', content: 'This is a test' });
    const node4PortLeft = node4.addPort(new PortModel({ position: 'left' }));
    const node4PortRight = node4.addPort(new PortModel({ position: 'right' }));
    node4.x = 1000;
    node4.y = 400;
    const node5 = new NodeModel({ type: 'database', content: 'MSSQL' });
    const node5PortTop = node5.addPort(new PortModel({ position: 'top' }));
    const node5PortBottom = node5.addPort(new PortModel({ position: 'bottom' }));
    const node5PortLeft = node5.addPort(new PortModel({ position: 'left' }));
    const node5PortRight = node5.addPort(new PortModel({ position: 'right' }));
    node5.x = 700;
    node5.y = 400;
    const node6 = new NodeModel({ type: 'connect' });
    const node6PortLeft = node6.addPort(new PortModel({ position: 'left' }));
    const node6PortRight = node6.addPort(new PortModel({ position: 'right' }));
    node6.x = 500;
    node6.y = 400;
    const node7 = new NodeModel({ type: 'connect', bkColor: '#c9171e', title: 'N' });
    const node7PortBottom = node7.addPort(new PortModel({ position: 'bottom' }));
    node7.x = 700;
    node7.y = 250;
    const node8 = new NodeModel({ type: 'subroutine', content: 'This is a test' });
    const node8PortTop = node8.addPort(new PortModel({ position: 'top' }));
    const node8PortRight = node8.addPort(new PortModel({ position: 'right' }));
    node8.x = 700;
    node8.y = 600;
    const node9 = new NodeModel({ type: 'offpage', content: 'This is a test' });
    const node9PortLeft = node9.addPort(new PortModel({ position: 'left' }));
    node9.x = 1000;
    node9.y = 700;
    const nodeEnd = new NodeModel({ type: 'terminal', category: 'end' });
    const portEnd = nodeEnd.addPort(new PortModel({ position: 'right' }));
    nodeEnd.x = 300;
    nodeEnd.y = 400;
    const link1 = new LinkModel();
    link1.setSourcePort(portStart);
    link1.setTargetPort(node1PortLeft);
    const link2 = new LinkModel();
    link2.setSourcePort(node1PortRight);
    link2.setTargetPort(node2PortLeft);
    const link3 = new LinkModel();
    link3.setSourcePort(node2PortRight);
    link3.setTargetPort(node3PortLeft);
    const link4 = new LinkModel();
    link4.setSourcePort(node3PortRight);
    link4.setTargetPort(node4PortRight);
    const link5 = new LinkModel();
    link5.setSourcePort(node4PortLeft);
    link5.setTargetPort(node5PortRight);
    const link6 = new LinkModel();
    link6.setSourcePort(node5PortLeft);
    link6.setTargetPort(node6PortRight);
    const link7 = new LinkModel();
    link7.setSourcePort(node5PortTop);
    link7.setTargetPort(node7PortBottom);
    const link8 = new LinkModel();
    link8.setSourcePort(node5PortBottom);
    link8.setTargetPort(node8PortTop);
    const link9 = new LinkModel();
    link9.setSourcePort(node8PortRight);
    link9.setTargetPort(node9PortLeft);
    const link10 = new LinkModel();
    link10.setSourcePort(node6PortLeft);
    link10.setTargetPort(portEnd);
    model.addNode(nodeStart);
    model.addNode(node1);
    model.addNode(node2);
    model.addNode(node3);
    model.addNode(node4);
    model.addNode(node5);
    model.addNode(node6);
    model.addNode(node7);
    model.addNode(node8);
    model.addNode(node9);
    model.addNode(nodeEnd);
    model.addLink(link1);
    model.addLink(link2);
    model.addLink(link3);
    model.addLink(link4);
    model.addLink(link5);
    model.addLink(link6);
    model.addLink(link7);
    model.addLink(link8);
    model.addLink(link9);
    model.addLink(link10);
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
