import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
    render(){
        const contents = this.props.success
        ? null
        : (
            <form className="form-inline">
                <input 
                    datatest="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="enter guess"
                />
                <button
                    datatest="submit-box"
                    className="btn btn-primary mb-2"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        )
        return (
            <div datatest="component-input">
                { contents }
            </div>
        )
    }

}

const mapStateToProps = ({ success }) => {
    return {
        success
    }  
}

export default connect(mapStateToProps)(Input)