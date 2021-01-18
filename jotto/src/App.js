import './App.css';
import Congrats from './Congrats'

function App() {
  return (
    <div dataTest="component-app" className="App">
      x
      <Congrats success={ false } />
    </div>
  );
}

export default App;
