import React from 'react';
import FlowChart from '../../../src/views/FlowChart';
import './style.less';

const diagram = [
  { type: 'progress' },
  { type: 'database' },
  { type: 'database' },
  { type: 'subroutine', routine: [ { type: 'test' } ] },
];

class SimpleExample extends React.Component {
  render() {
    return (
      <FlowChart diagram={diagram} />
    );
  }
}

export default SimpleExample;
