import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import VidPrew from './VidPrew';
import FAB from './FAB';
import Market from './Market';
import Curious from './Curious';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <VidPrew />
      <FAB />
      <Market />
      <Curious />
    </div>
  );
}

export default App;
