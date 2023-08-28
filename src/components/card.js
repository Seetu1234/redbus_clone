import "./card.css";

function Card(props){
    return (
        <div className="card" style={{backgroundImage:props.lg, display:"flex", width:"30%", height:"25vh", marginRight:"1%"}} >

            <div style={{display: "flex", width:"100%", height:"40vh"}}>

            <div className="card-child-1" style={{width:"35%", display:"flex", justifyContent:"center", alignItems:"center"}}>

                <img   src={props.img_link} alt="" width="80%" height="50%"/>
            </div>

           
            <div className="card-child-2" style={{width:"65%", height:"100%", border:"2px solid black"}}>
                <p>Bus</p>
                <p style={{fontWeight:"bolder", width:"60%"}}>{props.content1}</p>
                <p>valid till 31st Aug</p>
                <div>
                    <span>{props.content2}</span>
                    <img src="" alt="" />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Card;