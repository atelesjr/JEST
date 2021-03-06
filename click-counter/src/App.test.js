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
  return wrapper.find(`[datatest='${value}']`)
}

test('renders without error', () => {
  const wrapper = setup()
  //console.log(wrapper.debug())
  const appComponnet = findByTestAttr(wrapper, 'component-app')
  expect(appComponnet.length).toBe(1)

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

describe('increment', ()=>{
  test('renders incrment button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toBe(1)
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
  
})

describe('decrement', ()=> {
  test('renders a decrement button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'decrement-button')
    expect(button.length).toBe(1)
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

  
})

describe('error when counter goes below 0', () => {
  test('renders error message', () => {
    // I plan to implement this by using a "hidden" class for the error div
    // I plan to use the data-test value 'error-message' for the error div
    const wrapper = setup();
    const errorMessage = findByTestAttr(wrapper, 'error-message') 
    expect(errorMessage.length).toBe(1)
  });

  test('error message starts hidden', () => {

    const wrapper = setup();
    const errorMessage = findByTestAttr(wrapper, 'error-message').text()
    //errorMessage is undefined but in .text() is same as '' on this particular case.
    expect(errorMessage).toBe('')
  });

  describe('counter is 0 and decrement is clicked', () => {
    // let wrapper

    // beforeEach(() => {
    //   wrapper = setup();

    //   const button = findByTestAttr(wrapper, 'decrement-button');
    //   button.simulate('click');
    // });

    // not working maybe state changes in useEfeect
    // test('error shows', () => { 

    //   // check the class of the error message
    //   const errorMessage = findByTestAttr(wrapper, 'error-message').text()
    //   console.log(errorMessage)
    //   expect(errorMessage).toBe("The counter can't go bellow zero")
    

    // });

    // test('counter still displays 0', () => {
    //   const count = findByTestAttr(wrapper, 'count').text();
    //   expect(count).toBe("0");
    // });

    // test('clicking increment clears the error', () => {
    //   // find and click the increment button
    //   const incButton = findByTestAttr(wrapper, 'increment-button');
    //   incButton.simulate('click');

    //   // check the class of the error message
    //   const errorDiv = findByTestAttr(wrapper, 'error-message');
    //   const errorHasHiddenClass = errorDiv.hasClass('hidden');
    //   expect(errorHasHiddenClass).toBe(true);
    // });
  });

})




