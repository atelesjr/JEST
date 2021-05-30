
import './App.css';
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'


function App() {
  return (
    <div data-test="app" className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{ guessedWord: 'train', letterMacthCount: 3 }] } />
     
    </div>
  );
}

export default App;
