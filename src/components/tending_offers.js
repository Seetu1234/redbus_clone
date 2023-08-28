import {ele} from "./card_content";
import Card from "./card";
import "./trenging.css";
function Trending() {

  return (
    <div>
      <p>TRENDING OFFERS</p>
      <div className="cards">

        {
          ele.map(item => <Card key={item[2]} img_link={item[0]} content1={item[1]} content2={item[2]} lg={item[3]}></Card>)
        }
      </div>
    </div>
  );
}

export default Trending;
