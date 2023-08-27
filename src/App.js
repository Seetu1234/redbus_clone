import './App.css';
import Navbar from "./components/Navbar";
import FromAndTo from "./components/From_To";
import Card from "./components/card";
function App() {
  return (
    <div className="App">
      <div className="App-Navbar">
        <Navbar></Navbar>
      </div>
      <FromAndTo></FromAndTo>
      <Card img_link="" content1="" content2="" color1="" color2=""></Card>
    </div>
  );
}

export default App;
