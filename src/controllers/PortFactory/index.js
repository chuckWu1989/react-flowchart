import { PortFactory as Factory } from 'storm-react-diagrams';

class PortFactory extends Factory {
  constructor(type, PortModel) {
    super(type);
    this.PortModel = PortModel;
  }
  getNewInstance = () => (
    new (this.PortModel)()
  )
}

export default PortFactory;
