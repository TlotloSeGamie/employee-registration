
import { useState } from "react";
function AddEmployee(props) {


     const [emlpoyeesDetails, setEmployeesDetails]= useState('');
     const [title, setTitle]= useState('');
     const [workPhone, setWorkPhone]= useState('');
     const [email, setEmail]= useState('');
     const [names, setNames]= useState('');
     const [address, setAddress]= useState('');
     const [city, setCity]= useState('');
     const [zip, setZip]= useState('');
     const [phone, setPhone]= useState('');
     const [alternate, setAlternate]= useState('');

    const submit= (()=>{
        props.submit(emlpoyeesDetails, title, workPhone, email, names, address, city, zip, phone,alternate);
    })

    return(
        <div>
            <h1>Add a new employee</h1>
            <div className="title">
                <h2>Job Information</h2>     
                <input type="text" placeholder="Title/Position" onChange={(event)=> setTitle(event.target.value)} /><br></br>
                <input type="text" placeholder="Work Phone Number" onChange={(event)=> setWorkPhone(event.target.value)} /><br></br>
                <input type="text" placeholder="Email" onChange={(event)=> setEmail(event.target.value)} />
            </div>

            <div className="personal">
                <h2>Personal Information</h2>
                <h6><b>Full Names</b></h6>
                <input type="text" placeholder="First Name and Last Name" onChange={(event)=> setNames(event.target.value)} />                
                <br></br>
                <div className="address">
                    <h6><b>Address:</b></h6>
                    <input type="text" placeholder="Street Address" onChange={(event)=> setAddress(event.target.value)} /><br></br>
                    <input type="text" placeholder="City" onChange={(event)=> setCity(event.target.value)} /><br></br>
                    <input type="text" placeholder="Zip Code" onChange={(event)=> setZip(event.target.value)} /><br></br>
                </div>
                <div className="contact">
                    <h6><b>Contact Details:</b></h6>
                    <input type="text" placeholder="Phone Number" onChange={(event)=> setPhone(event.target.value)} /><br></br>
                    <input type="text" placeholder="Alternate Phone Number" onChange={(event)=> setAlternate(event.target.value)} /><br></br>
                    <input type="text" placeholder="Email address" onChange={(event)=> setEmail(event.target.value)} /><br></br>

                </div>
                
            </div>

            



             <button onClick={submit}>Submit</button>
        </div>
    )
    
}

export default AddEmployee;