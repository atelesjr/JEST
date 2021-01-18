import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../../test/testUtils'
import Congrats from './index'

const defaultProps = { sucess: false }

/**
* @function Congrats
* @params {object} props
* @returns {ShallowWrapper}
*/
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Congrats {...setupProps} />);
}

test('Congrats renders without error', () => {
    const wrapper = setup({ success: false })
    const componnet = findByTestAttr(wrapper, 'congrats')
    expect(componnet.length).toBe(1)
});

test('Congrats renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false })
    const componnet = findByTestAttr(wrapper, 'congrats')
    expect(componnet.text()).toBe('')
});

test('Congrats renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true })
    const componnet = findByTestAttr(wrapper, 'congrats-message')
    expect(componnet.text().length).not.toBe('')
});

test('does note throw warning with expeted props', () => {
    const expectedProps = { success: false }
    checkProps(Congrats, expectedProps)
})