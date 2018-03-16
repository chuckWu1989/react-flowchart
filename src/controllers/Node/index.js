import React from 'react';
import { NodeFactory as Factory } from 'storm-react-diagrams';

class NodeFactory extends Factory {
  constructor(type, Widget, NodeModel) {
    super(type);
    this.Widget = Widget;
    this.NodeModel = NodeModel;
  }
  generateReactWidget = (diagramEngine, { props, ...node }) => {
    const { Widget } = this;
    return <Widget {...props} node={node} />;
  }
  getNewInstance = () => new this.NodeModel();
}

export default NodeFactory;
