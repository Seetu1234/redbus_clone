import './App.css';
import Navbar from "./components/Navbar";
import FromAndTo from "./components/From_To";
import Trending from "./components/tending_offers";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className="App-Navbar">
        <Navbar></Navbar>
      </div>
      <FromAndTo></FromAndTo>

      <Trending></Trending>
      
    </div>
  );
}

export default App;
