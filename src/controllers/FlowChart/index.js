import { DiagramEngine, DiagramModel, LinkModel } from 'storm-react-diagrams';
import { DIAGRAM, TYPE, ROUTINE } from './config';

const getAllTypes = (diagram) => {
  const result = [];
  diagram.forEach((item) => {
    if (TYPE in item) {
      result.push(item[TYPE]);
      if (TYPE === 'subroutine' && ROUTINE in item) {
        result.concat(getAllTypes(item[ROUTINE]));
      }
    } else {
      throw new Error('ErrorUsing: diagram. Type is necessary.');
    }
  });
  return result;
};
export const willMount = (props) => {
  const { [DIAGRAM]: diagram } = props;
  if (Array.isArray(diagram)) {
    const engine = new DiagramEngine();
    engine.installDefaultFactories();
    let types = getAllTypes(diagram);
    types = types.filter((value, idx, self) => self.indexOf(value) === idx);
    console.log(types);
  } else {
    throw new Error('ErrorType: diagram. It should be an array.');
  }
};

export default willMount;
