import './App.css';
import AddEmployee from './components/add';
import DisplayEmployee from './displayemployee';

import { useState } from 'react';
function App() {

  const [employeeDetails, setEmployeeDetails]= useState([]);

  const submit= (employeeDetails, title, workPhone, email, names, address, suburb,city, zip, phone, alternate)=>{
      setEmployeeDetails((employeeDetails)=>[...employeeDetails, {title:title, workPhone:workPhone, email:email, names:names, address:address, suburb:suburb,city:city, zip:zip, phone:phone, alternate:alternate}])
  
      console.log(employeeDetails);
    };

  return (
    <div className="App">
      <AddEmployee submit={submit}/>
      <DisplayEmployee employeeDetails={employeeDetails}/>
    </div>
  );
}

export default App;
