// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// stop gap since enzyme adapter for react 17 isn't officially supported yet
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
