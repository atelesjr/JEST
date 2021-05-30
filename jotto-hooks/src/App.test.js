import { shallow } from 'enzyme'
import { findByTestAttr } from './utils'
import App from './App'

let wrapper

const setup = () => {
    return shallow(
        <App />
    )
}

test('renders without error', () => {
    wrapper = setup()
    const component = findByTestAttr(wrapper, 'app')
    expect(component.length).toBe(1)
})  