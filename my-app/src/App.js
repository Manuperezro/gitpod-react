import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionaGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      <FunctionaGreetingWithProps greeting="Nice to meet you!" />
    </div>
  );
}

export default App;
