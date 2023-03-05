import './App.css';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Where in the world?</h1>
        <div className="mode-toggle">
          <img src="https://img.icons8.com/ios/50/000000/moon-symbol.png" alt="moon icon" width="20"/>
          <p>Dark Mode</p>
        </div>
      </header>

      <Home />
      
    </div>
  );
}

export default App;
