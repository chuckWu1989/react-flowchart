import React from 'react';
import FlowChart from '../../../src/routers/FlowChart';
import SourceItem from '../../../src/views/SourceItem';
import './style.less';

const diagram = [
  {
    uid: 1,
    x: 100,
    y: 100,
    type: 'terminal',
    category: 'start',
    links: [{ from: 'right', to: [2, 'left'] }],
  },
  {
    uid: 2,
    x: 400,
    y: 100,
    type: 'progress',
    title: 'Handler',
    content: 'This is an example',
    links: [{ from: 'right', to: [3, 'left'] }],
  },
  {
    uid: 3,
    x: 700,
    y: 100,
    type: 'terminal',
    category: 'end',
  },
];

const SimpleExample = () => (
  <div className="simple-example-style">
    <div className="source-area">
      <SourceItem>
        <p>Data</p>
      </SourceItem>
    </div>
    <div className="flow-chart-area">
      <FlowChart diagram={diagram} />
    </div>
  </div>
);

export default SimpleExample;
