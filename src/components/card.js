function Card(props){
    return (
        <div className="card">
            <div className="card-child-1">
                <img src={props.img_link} alt="image$" />
            </div>
            <div className="card-child-2">
                <p>Bus</p>
                <p>{props.content1}</p>
                <p>valid till 31st Aug</p>
                <div>
                    <span>{props.content2}</span>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Card;