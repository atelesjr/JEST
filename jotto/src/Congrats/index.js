import React from 'react'
import PropTypes from 'prop-types'

/**
 * @function Congrats
 * @returns {JSX.Element}
 */

const Congrats = (props) => {
  
    return (
        props.success 
        ? (
            <div 
                dataTest="congrats"
                className="alert alert-success"
            >
                <span dataTest="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        ): (
            <div dataTest="congrats" />
        )
    )
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats