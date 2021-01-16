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

test('renders incrment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
});

test('renders a decrement button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'decrement-button')
  expect(button.length).toBe(1)
});

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)  

});

test('counter starts at 0', () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('0') //.text() returns string not number


});


test('clicking on button increments counter display', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')

  //click button
  button.simulate('click')
  //finde display, and test if count is incremented
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('1')

});

test('clicking on button decrements counter display', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'decrement-button')

  //click button
  button.simulate('click')
  //finde display, and test if count is incremented
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('-1')

});


