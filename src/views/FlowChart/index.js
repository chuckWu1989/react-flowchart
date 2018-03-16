import React from 'react';
import PropTypes from 'prop-types';
import { DiagramWidget } from 'storm-react-diagrams';
import 'storm-react-diagrams/dist/style.min.css';
import './style.less';

class FlowChart extends React.Component {
  static defaultProps = {
    smartRouting: true,
    style: {},
    getEngine: () => {},
    updateEngine: () => {},
  }
  static propTypes = {
    diagram: PropTypes.array.isRequired,
    smartRouting: PropTypes.bool,
    style: PropTypes.object,
    getEngine: PropTypes.func,
    updateEngine: PropTypes.func,
  }
  componentWillMount() {
    const { props: { getEngine } } = this;
    const engine = getEngine();
    this.setState({ engine });
  }
  componentWillReceiveProps(nextProps) {
    const { props: { updateEngine } } = this;
    updateEngine.call(this, nextProps);
  }
  render() {
    const { props: { style, smartRouting }, state: { engine } } = this;
    return (
      <div className="flowchart-style diagram-background" style={style}>
        <DiagramWidget diagramEngine={engine} smartRouting={smartRouting} />
      </div>
    );
  }
}

export default FlowChart;
