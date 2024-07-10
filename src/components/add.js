
import { useState } from "react";
function AddEmployee(props) {


     const [emlpoyeesDetails, setEmployeesDetails]= useState('');
     const [title, setTitle]= useState('');
     const [workPhone, setWorkPhone]= useState('');
     const [email, setEmail]= useState('');
     const [names, setNames]= useState('');
     const [address, setAddress]= useState('');
     const [suburb, setSuburb]= useState('');
     const [city, setCity]= useState('');
     const [zip, setZip]= useState('');
     const [phone, setPhone]= useState('');
     const [alternate, setAlternate]= useState('');

    const submit= (()=>{
        props.submit(emlpoyeesDetails, title, workPhone, email, names, address, suburb, city, zip, phone,alternate);
    })

    return(
        <div className="employee">
            <h1>Add a new employee</h1>
            <div className="title">
                <h2>Job Information</h2>     
                <input type="text" placeholder="Title/Position" onChange={(event)=> setTitle(event.target.value)} className="pos" />
                <input type="text" placeholder="Work Phone Number" onChange={(event)=> setWorkPhone(event.target.value)} className="work" />
                <input type="text" placeholder="Email" onChange={(event)=> setEmail(event.target.value)} className="email" />
            </div>

            <div className="personal">
                <h2>Personal Information</h2>
                <div className="FN">
                <h6><b>Full Names:</b></h6>
                <input type="text" placeholder="First Name and Last Name" onChange={(event)=> setNames(event.target.value)} className="names" />                
                </div>
                <div className="address">
                    <div className="dress">
                    <h6><b>Address:</b></h6>
                    <input type="text" placeholder="Street Address" onChange={(event)=> setAddress(event.target.value)} className="street" /><br></br>
                    </div>
                    <input type="text" placeholder="Suburb" onChange={(event)=> setSuburb(event.target.value)} className="suburb" /><br></br>
                    
                    <input type="text" placeholder="City" onChange={(event)=> setCity(event.target.value)} className="city" /><br></br>
                    <input type="text" placeholder="Zip Code" onChange={(event)=> setZip(event.target.value)} className="zip" /><br></br>
                </div>
                <div className="contact">
                    <h6><b>Contact Details:</b></h6>
                    <input type="text" placeholder="Phone Number" onChange={(event)=> setPhone(event.target.value)} className="phone" /><br></br>
                    <input type="text" placeholder="Alternate Phone Number" onChange={(event)=> setAlternate(event.target.value)} className="alter" /><br></br>
                    <input type="text" placeholder="Email address" onChange={(event)=> setEmail(event.target.value)} className="gmail" /><br></br>

                </div>
                
            </div>

            



             <button onClick={submit}className="btn">Submit</button>
        </div>
    )
    
}

export default AddEmployee;