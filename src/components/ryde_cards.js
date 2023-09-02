import "./R_card.css"

function Ryde_card(props){
    return (
        <div>
            <h3 style={{fontWeight:"bolder", color:"grey"}}>{props.heading}</h3>
            <div className="R_card">
                <ul>
                    {
                        props.array.map((item)=> <li><a href="#" style={{textDecoration:"none", color:"black"}}>{item}</a></li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Ryde_card;