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
                datatest="congrats"
                className="alert alert-success"
            >
                <span datatest="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        ): (
            <div datatest="congrats" />
        )
    )
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats