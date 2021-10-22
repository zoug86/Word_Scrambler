import Home from './pages/Home';
import { WordContextProvider } from './context/WordContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <WordContextProvider>
        <Home />
      </WordContextProvider>
    </div>
  );
}

export default App;
