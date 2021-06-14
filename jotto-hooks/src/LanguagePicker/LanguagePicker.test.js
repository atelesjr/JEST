import { shallow } from 'enzyme'
import { findByTestAttr } from '../utils'
import LanguagePciker from './'

const mockSetLanguage = jest.fn()
const setup = () => {
    return shallow(
        <LanguagePciker setLanguage={ mockSetLanguage } />
    )
}

test(`renders without error`, () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'language-picker')
    expect(component.exists()).toBe(true)
}) 

// test(`does not throw an warning with expected props`, () => {
//     //const spinner = findByTestAttr(wrapper, 'spinner')
//     //expect(spinner.exists()).toBe(loadingShows)
// }) 

test(`renders non-zero language icons`, () => {
    const wrapper = setup()
    const languageIcons = findByTestAttr(wrapper, 'language-icon')
    expect(languageIcons.length).toBeGreaterThan(0)
}) 

test(`calls setLanguage prop upn click`, () => {
    const wrapper = setup()
    const languageIcons = findByTestAttr(wrapper, 'language-icon')
    const firstIcon = languageIcons.first()
    firstIcon.simulate('click')

    expect(mockSetLanguage).toHaveBeenCalled()
}) 