import logo from './logo.svg';
import './App.css';
import BmiCalculator from './Components/BmiCalculator';

function App() {
  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <BmiCalculator />
      <h5>Built by <a href='https://github.com/Prasannarajpaul' target='_blank'>Prasanna Raj Paul Maddala</a></h5>
    </div>
  );
}

export default App;
