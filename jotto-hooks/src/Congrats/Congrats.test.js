import { shallow } from 'enzyme'
import { findByTestAttr } from '../utils'
import Congrats from './index'

const setup = (props={}) => {
 return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'congrats')
    expect(component.length).toBe(1)
    
});

test('renders no text then `success` prop is false', () => {
    const wrapper = setup({ success: false })
    const component = findByTestAttr(wrapper, 'congrats')
    expect(component.text()).toBe('')
});

test('renders non-empty congrats message when success props is true', () => {
    const wrapper = setup({ success: true })
    const message = findByTestAttr(wrapper, 'message')
    expect(message.text().length).not.toBe(0)
});