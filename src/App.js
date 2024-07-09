import './App.css';
import AddEmployee from './components/add';
import DisplayAddEmployee from './components/List';

import { useState } from 'react';
function App() {

  const [employeeDetails, setEmployeeDetails]= useState([]);

  const submit= (employeeDetails, title, workPhone, email, names, address, city, zip, phone, alternate)=>{
      setEmployeeDetails((employeeDetails)=>[...employeeDetails, {title:title, workPhone:workPhone, email:email, names:names, address:address, city:city, zip:zip, phone:phone, alternate:alternate}])
  
      console.log(employeeDetails);
    };

  return (
    <div className="App">
      <DisplayAddEmployee employeeDetails={employeeDetails}/>
      <AddEmployee submit={submit}/>
    </div>
  );
}

export default App;
