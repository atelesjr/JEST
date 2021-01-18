import checkPropTypes from "check-prop-types"


/**
* @function findByTestAttr
* @params {string} value
* @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[dataTest='${value}']`)
}

export const checkProps = (component, props) => {
    //console.log('commp', component)
    //console.log('props', props.debug())
    const propError = checkPropTypes(
        component.propTypes, 
        props,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined()
}