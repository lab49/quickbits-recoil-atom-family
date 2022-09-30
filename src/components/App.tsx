import './App.css';
import TileContainer from './TileContainer';
import Controls from './Controls';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <div className='Header'>
        <h1>Quickbits Atom Family</h1>
        <Controls />
      </div>
      <TileContainer />
      <Footer />
    </div>
  );
}

export default App;
