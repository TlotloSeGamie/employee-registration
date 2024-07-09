function DisplayAddEmployee(props) {
    return(
        <div>
            <h5>Employee List</h5>

{props.employeeDetails.map((data)=>(
<div>

    <div className="Employment-list">
        <div>
            <h6>{data.title}</h6>
        </div>
        <div>
            <h6>{data.workPhone}</h6>
        </div>
        <div>
            <h6>{data.email}</h6>
        </div>
        <div>
            <h6>{data.names}</h6>
        </div>
        <div>
            <h6>{data.address}</h6>
        </div>
        <div>
            <h6>{data.city}</h6>
        </div>
        <div>
            <h6>{data.zip}</h6>
        </div>
        <div>
            <h6>{data.phone}</h6>
        </div>
        <div>
        <h6>{data.alternate}</h6>
        </div>

    </div>
    
    
    

</div>
))}

        </div>
    )
}

export default DisplayAddEmployee;