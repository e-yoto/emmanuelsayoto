
import Navbar from './components/Navbar';
import Home from './scenes/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
