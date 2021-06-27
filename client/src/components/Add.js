import React,{useState} from "react";
import Axios from "axios";
import {useHistory} from 'react-router-dom';

function Add(){
    let history=useHistory()
    
    const[name,setName]=useState("")
    const[id,setId]=useState("")

    const onSubmit = async e=> {
        
       await Axios.post("http://localhost:3001/insert",{id:id,name:name}).then((response)=>{
             console.log(response)
             history.push("/components/view")
        })
    }
 
    return(
       <div className="App">
           <form className="table border shadow" onSubmit={e=>onSubmit(e)}>
               <p>

               </p>
               <h2>Insert </h2> 
               <p></p>
               <p><input type="text" name="id"  placeholder="Id" required onChange={(e)=>{
              setId(e.target.value)
        }

        }></input></p>
              <p><input type="text" name="name"  placeholder="Name" required onChange={(e)=>{
              setName(e.target.value)
        }

        }></input></p>
               <input type="button" value="Insert" onClick={onSubmit}></input>
               <p></p>
           </form>
       </div>
    )
}

export default Add;