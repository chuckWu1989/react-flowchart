import React from 'react';
import {
  WIDTH,
  HEIGHT,
  STYLE,
  defaultProps,
  propTypes,
} from './props';

const Data = (props) => {
  const {
    [WIDTH]: width,
    [HEIGHT]: height,
    [STYLE]: style,
  } = props;
  return (
    <div
      className="data-widget-style"
      style={{ width, height, ...style }}
    >

    </div>
  );
};
Data.defaultProps = defaultProps;
Data.propTypes = propTypes;

export default React.createFactory(Data);
