import React, { useContext } from 'react'
import languageContext from '../contexts/language'
import getStringByLanguage from '../helpers/strings'

const Congrats = ({ success }) => {
    const language = useContext(languageContext)
  
    if(success){
        return(
            <div data-test="congrats" className="alert alert-success">
                <span data-test="message">
                    { getStringByLanguage( language, 'congrats' ) }
                </span>
            </div>
        )
    } else {
        return <div data-test="congrats" />
    }
    
}

export default Congrats