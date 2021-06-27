import React, { useEffect,useState } from "react"
import {Link} from "react-router-dom"
import Axios from "axios"

function View(){

    const [user,setUser]=useState([])
    
    useEffect(()=>{
      load();
      
    },[])
    
    const load = async ()=>{
      const result= await Axios.get("http://localhost:3001/view")
      console.log(result)
      setUser(result.data)
    }
     return(
    
    <div className="Emp">
      <p></p>
   
    <table className="table border shadow">
      <thead className="thead-dark">
       <tr >
       <th scope="col">index</th>
       <th scope="col">Id</th>
       <th scope="col">Name</th>
       <th scope="col">Action</th>

         <th ><Link className="btn btn-outline-dark" to={"/components/Add"}>Insert</Link></th>
    
       
      </tr>
      </thead>
    <tbody>
       {
         user.map((v,i)=>{
           return(
           <tr >
           <th scope="row">{i+1}</th>
           <td key={v.id}>{v.id}</td>
           <td key={v.name}>{v.name}</td>
          
           <td>
             <Link className="btn btn-primary mr-2" to={"/components/Edit"}>Edit</Link>
             <Link className="btn btn-danger mr-3" to={"/components/Del"}>Delete</Link>
           </td>
          
           </tr> 
           )}
         )}
    </tbody>
  </table>
    </div>
 )
}
export default View;