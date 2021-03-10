import React from 'react'

/**
 * @function 
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


export default Congrats