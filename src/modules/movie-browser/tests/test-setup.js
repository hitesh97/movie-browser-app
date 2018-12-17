import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//set up adapter for all tests
export const configureAdapter = () => {
  configure({ adapter: new Adapter() });
};
