import { DiagramEngine, DiagramModel } from 'storm-react-diagrams';
import NodeFactory from '../../controllers/Node';
import PortFactory from '../../controllers/Port';
import NodeModel from '../../models/Node';
import PortModel from '../..//models/Port';
import Progress from '../../views/Progress';
import Terminal from '../../views/Terminal';
import Decision from '../../views/Decision';
import Documents from '../../views/Documents';
import Data from '../../views/Data';
import DataBase from '../../views/DataBase';
import Connect from '../../views/Connect';
import SubRoutine from '../../views/SubRoutine';
import OffPage from '../../views/OffPage';
import {
  UID,
  TYPE,
  ROUTINE,
  POSITION,
  X,
  Y,
  LINKS,
  FROM,
  TO,
  PROGRESS,
  TERMINAL,
  DECISION,
  DOCUMENTS,
  DATA,
  DATABASE,
  CONNECT,
  SUBROUTINE,
  OFFPAGE,
} from './config';

export const getModel = (nodes, links) => {
  const model = new DiagramModel();
  model.addAll.apply(model, [...nodes, ...links]);
  return model;
};
export const getView = (type) => {
  switch (type) {
    case PROGRESS: return Progress;
    case TERMINAL: return Terminal;
    case DECISION: return Decision;
    case DOCUMENTS: return Documents;
    case DATA: return Data;
    case DATABASE: return DataBase;
    case CONNECT: return Connect;
    case SUBROUTINE: return SubRoutine;
    case OFFPAGE: return OffPage;
    default: return undefined;
  }
};
export const getLinks = (diagram, nodes) => {
  let links = [];
  diagram.forEach((item) => {
    const { [UID]: uid, [LINKS]: linksConfig = [] } = item;
    const startNode = nodes.find(n => n[UID] === uid);
    const nodeLinks = linksConfig.map((linkConfig) => {
      const { [FROM]: from, [TO]: to } = linkConfig;
      let link;
      let startPort = startNode.getPort(from);
      if (!startPort) {
        startPort = startNode.addPort(new PortModel({ [POSITION]: from }));
      }
      if (Array.isArray(to) && to.length === 2) {
        const endNode = nodes.find(n => n[UID] === to[0]);
        if (!endNode) {
          throw new Error('ErrorUsing: node uid dosen\'t exist in diagram.');
        }
        let endPort = endNode.getPort(to[1]);
        if (!endPort) {
          endPort = endNode.addPort(new PortModel({ [POSITION]: to[1] }));
        }
        link = startPort.link(endPort);
      }
      return link;
    });
    links = links.concat(nodeLinks.filter(l => l !== undefined));
  });
  return links;
};
export const getNodes = (diagram) => {
  const nodes = [];
  diagram.forEach((item) => {
    const {
      [UID]: uid,
      [X]: x,
      [Y]: y,
      ...others
    } = item;
    const node = new NodeModel(others);
    node[UID] = uid;
    node[X] = x;
    node[Y] = y;
    nodes.push(node);
  });
  return nodes;
};
export const getEngineWithFactories = (types) => {
  const engine = new DiagramEngine();
  engine.installDefaultFactories();
  types.forEach((type) => {
    const view = getView(type);
    engine.registerNodeFactory(new NodeFactory(type, view, NodeModel));
    engine.registerPortFactory(new PortFactory(type, PortModel));
  });
  return engine;
};
export const getAllTypes = (diagram) => {
  let result = [];
  diagram.forEach((item) => {
    if (TYPE in item) {
      result.push(item[TYPE]);
      if (item[TYPE] === SUBROUTINE && ROUTINE in item) {
        result = result.concat(getAllTypes(item[ROUTINE]));
      }
    } else {
      throw new Error('ErrorUsing: type is necessary.');
    }
  });
  return result;
};
export const getUniqueTypes = (diagram) => {
  let types = getAllTypes(diagram);
  types = types.filter((value, idx, self) => self.indexOf(value) === idx);
  return types;
};
export const getEngine = (props) => {
  let engine;
  const { diagram } = props;
  try {
    if (!Array.isArray(diagram)) {
      throw new Error('ErrorUsing: diagram should be an array.');
    }
    const types = getUniqueTypes(diagram);
    const nodes = getNodes(diagram);
    const links = getLinks(diagram, nodes);
    const model = getModel(nodes, links);
    engine = getEngineWithFactories(types);
    engine.setDiagramModel(model);
  } catch (e) {
    throw e;
  }
  return engine;
};

export default getEngine;
