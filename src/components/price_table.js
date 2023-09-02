import "./price_table.css";

function prices(){
    return (
        <div>
            <table>
                <thead style={{backgroundColor:"#e5ebf8"}}>
                    <tr>
                        <th>Bus type</th>
                        <th>Starting price per km</th>
                        <th>Driver Charges</th>
                    </tr>
                </thead>
                		
		
	
		
                <tbody>
                    <tr>
                        <td>33 Seater in Ahmedabad</td>
                        <td>RS. 45</td>
                        <td>RS. 500</td>
                    </tr>
                    <tr>
                        <td>41 Seater in Ahmedabad</td>
                        <td>RS. 45</td>
                        <td>RS. 500</td>
                    </tr>
                    <tr>
                        <td>56 Seater in Ahmedabad</td>
                        <td>RS. 45</td>
                        <td>RS. 500</td>
                    </tr>
                    <tr className="seperate">
                        <td>40 Seater in Ahmedabad</td>
                        <td>RS. 62</td>
                        <td>RS. 400</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default prices;