import "./From_To.css";
function fromAndTwo(){
    return (
        <div className="Menu-Container">
            
            <div className="Menu">

                <div className="Menu-1">
                    <i class="fa-solid fa-bus-simple fa-lg"></i>
                    <p style={{marginLeft:"10px"}}>From</p>
                
                </div>
                <div className="Menu-2">
                    <i class="fa-solid fa-bus-simple fa-lg"></i>
                    <p style={{marginLeft:"10px"}}>To</p>
                </div>
                <div className="Menu-3">
                    <i class="fa-regular fa-calendar fa-lg"></i>
                    <p style={{marginLeft:"10px"}}>Date</p>
                </div>
                <div className="Menu-4">
                    <p>SEARCH BUSES</p>
                </div>
            </div>
        </div>
    );
}

export default fromAndTwo;