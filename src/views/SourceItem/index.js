import React, { Component, PropTypes } from 'react';

class SourceItem extends Component {
  static defaultProps = {
  }
  static propTypes = {
    model: PropTypes.node.isRequired,
  }
  constructor(props) {
    super(props);
    this.onSourceDrag = this.onSourceDrag.bind(this);
  }
  onSourceDrag(event) {
    event.dataTransfer.setData('diagram-node', JSON.stringify(this.props.model));
  }
  render() {
    const { props, onSourceDrag } = this;
    const { children } = props;
    return (
      <div
        onDrag={onSourceDrag}
        draggable
      >
        {children}
      </div>
    );
  }
}

export default SourceItem;
