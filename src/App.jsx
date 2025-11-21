
import './App.css'
import { employeesData } from './data'
import DataTable from "react-data-table-component";
 import { useState } from 'react';

function App() {
 
  const columns = [
    {
      name: "ID",
      selector:(row)=>row.emp_id,
      sortable:true
    },
    {
      name: "Name",
      selector:(row)=>row.name,
      sortable:true
    },
    {
      name: "Location",
      selector:(row)=>row.location,
      sortable:true
    },
    
  ]
  const [filtereddata,setFiltereddata] = useState(employeesData)
  const customStyles={
    headCells:{
      style:{
        backgroundColor:"black",
        color:"white",
        fontSize:"20px",
      }
    }
  }
  const handleChange = (e)=>{
    const query = e.target.value
    const new_data = employeesData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    setFiltereddata(new_data)
  }
  

  return (
    <>
    <div>
      <input type="text" onChange={handleChange} placeholder='search by employee name'/>
    </div>
    <div>
      <DataTable columns={columns} data={filtereddata} pagination sortable customStyles={customStyles} />
    </div>
     
    </>
  )
}

export default App
