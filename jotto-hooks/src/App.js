
import './App.css';
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import Input from './Input'

function App() {
  const success = false
  const secretWorld = 'party'
  const guessedWords = []


  return (
    <div data-test="app" className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords 
        guessedWords={ guessedWords } 

      />
      <Input success={success} secretWorld={secretWorld}/>
    </div>
  );
}

export default App;
