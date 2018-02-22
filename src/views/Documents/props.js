import PropTypes from 'prop-types';

export const TITLE = 'title';
export const SIZE = 'size';
export const HREF = 'href';
export const BKCOLOR = 'bkColor';
export const STYLE = 'style';
export const TITLESTYLE = 'titleStyle';
export const defaultProps = {
  [TITLE]: 'Untitled',
  [HREF]: '',
  [BKCOLOR]: '#fbd26b',
  [SIZE]: 150,
  [STYLE]: {},
  [TITLESTYLE]: {},
};
export const propTypes = {
  [TITLE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [HREF]: PropTypes.string,
  [BKCOLOR]: PropTypes.string,
  [SIZE]: PropTypes.number,
  [STYLE]: PropTypes.object,
  [TITLESTYLE]: PropTypes.object,
};
