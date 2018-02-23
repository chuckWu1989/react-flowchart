import PropTypes from 'prop-types';

export const TITLE = 'title';
export const SIZE = 'size';
export const BKCOLOR = 'bkColor';
export const STYLE = 'style';
export const TITLESTYLE = 'titleStyle';
export const defaultProps = {
  [TITLE]: 'Y',
  [SIZE]: 50,
  [BKCOLOR]: '#007b43',
  [STYLE]: {},
  [TITLESTYLE]: {},
};
export const propTypes = {
  [TITLE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [SIZE]: PropTypes.number,
  [BKCOLOR]: PropTypes.string,
  [STYLE]: PropTypes.object,
  [TITLESTYLE]: PropTypes.object,
};
