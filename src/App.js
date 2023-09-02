import './App.css';
import Navbar from "./components/Navbar";
import FromAndTo from "./components/From_To";
import Trending from "./components/tending_offers";
import Ryde_card from "./components/ryde_cards";
import ahmedabad,{othercities, data1, data2, data3, data4, data5, data6, data7} from "./components/utils";
import PriceTable from "./components/price_table";
import Ryde_footer from "./components/ryde_footer";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      {/* <div className="App-Navbar">
        <Navbar></Navbar>
      </div>
      <FromAndTo></FromAndTo>

      <Trending></Trending> */}
      <PriceTable></PriceTable>
      <div className="ryde_cards">

        <Ryde_card heading="Bus Rentals in Ahmedabad" array={ahmedabad}></Ryde_card>
        <Ryde_card heading="Bus rental in other cities" array={othercities}></Ryde_card>
        <Ryde_card heading="Tempo travel in other cities" array={data1}></Ryde_card>
        <Ryde_card heading="Car rental in cities" array={data2}></Ryde_card>
        <Ryde_card heading="Car Rental Routes" array={data3}></Ryde_card>
        <Ryde_card heading="Other car types to rent" array={data4}></Ryde_card>
        <Ryde_card heading="Events from city" array={data5}></Ryde_card>
        <Ryde_card heading="Events" array={data6}></Ryde_card>
        <Ryde_card heading="Book Airport Taxi" array={data7}></Ryde_card>
      </div>

      <Ryde_footer></Ryde_footer>
      
    </div>
  );
}

export default App;
