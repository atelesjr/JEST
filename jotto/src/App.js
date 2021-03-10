import { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
//components
import Congrats from './Congrats'
import GuessedWords from './GuessedWords';
import Input from './generics/input'
//action
import { getSecretWord } from './redux/actions'

export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.getSecretWord()
  }
  
  render(){
    
    return(
      <div datatest="component-app" className="container">
        <h1>Jotto</h1>
        <div>The secret word is { this.props.secretWord }</div>
        <Congrats success={ this.props.sucesss } />
        <Input />
        <GuessedWords guessedWords={ this.props.guessedWords } 
        />
      </div>
    
    )

  }

}

const mapStateToProps = ( state ) => {
  const { success, guessedWords, secretWord } = state

  return { success, guessedWords, secretWord }

}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
