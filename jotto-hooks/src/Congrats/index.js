import React from 'react'

const Congrats = ({success}) => {

    if(success){
        return(
            <div data-test="congrats">
                <span data-test="message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        )
    } else {
        return <div data-test="congrats" />
    }
    
}

export default Congrats