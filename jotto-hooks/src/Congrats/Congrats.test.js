import { mount } from 'enzyme'
import { findByTestAttr } from '../utils'
import Congrats from './index'
//context
import languageContext from '../contexts/language'

const setup = ({ success, language }) => {
    language = language || 'en'
    success = success || false

    return mount(
        <languageContext.Provider value={ language }>
                <Congrats success={success} />
        </languageContext.Provider>

    )
}

// describe('languagePicker', () => {
//     test('correctly renders congrats string in english', () => {
//         const wrapper = setup({ success: true })
//         expect(wrapper.text()).toBe("Congratulations! You guessed the word!")
//     });

//     test('correctly renders congrats string in emoji', () => {
//         const wrapper = setup({ success: true, language: 'emoji' })
//         expect(wrapper.text()).toBe('🎯🎉')
//     });
// })

describe('language picker', () => {
    test('correctly renders congrats string in English by default', () => {
      const wrapper = setup({ success: true });
      expect(wrapper.text()).toBe('Congratulations! You guessed the word!');
    });
    test('correctly renders congrats string in emoji', () => {
      const wrapper = setup({ success: true, language: 'emoji' });
      expect(wrapper.text()).toBe('🎯🎉');
    });
});


test('renders without error', () => {
    const wrapper = setup({})
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