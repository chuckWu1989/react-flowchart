import React from 'react';
import { DiagramWidget } from 'storm-react-diagrams';
import 'storm-react-diagrams/dist/style.css';
import { willMount } from '../../controllers/FlowChart';

class FlowChart extends React.Component {
  componentWillMount() {
    try {
      willMount(this.props);
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <DiagramWidget diagramEngine={this.state.engine} />
      </div>
    );
  }
}

export default FlowChart;
