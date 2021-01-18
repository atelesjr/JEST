import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import App from './App';

Enzyme.configure({ adapter: new Adapter()})

/**
 * @function setup
 * @returns { ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, value) =>{
  return wrapper.find(`[dataTest='${value}']`)
}

test('renders without error', () => {
  const wrapper = setup()
  //console.log(wrapper.debug())
  const appComponnet = findByTestAttr(wrapper, 'component-app')
  expect(appComponnet.length).toBe(1)

});