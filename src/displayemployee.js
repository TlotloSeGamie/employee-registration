function DisplayEmployee (props) {
    return(
        <div>
            <h4><b>Employee List</b></h4>

            <table>
                <tr>
                    <th>Full Names</th>
                    <th>Phone Number</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
               
 {props.employeeDetails.map((data)=>(
                <tr>  
                    <td>{data.names}</td>
                    <td>{data.phone}</td>
                    <td>{data.city}</td>
                    <td>{data.zip}</td>
                    <td>{data.email}</td>

                    <td>
                        <button>edit</button>
                        <button>delete</button>
                    </td>
                </tr>
))}
                
            </table>
        </div>
        )
}

export default DisplayEmployee;