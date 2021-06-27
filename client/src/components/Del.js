import React,{useState} from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom"


function Delete(){
    let history=useHistory()
    const[id,setId]=useState("")

    const onSubmit = async e=> {
        
       await Axios.post("http://localhost:3001/delete",{id:id}).then((response)=>{
             console.log(response)
             history.push("/components/view")
        })
    }
    
    return(
       <div className="App">
           <form className="table border shadow" onSubmit={e=>onSubmit(e)} >
               <p></p>
               <h2>Delete</h2>
             <p><input type="text" name="id" placeholder="Id"required onChange={(e)=>{
              setId(e.target.value)
        }

        }></input></p>
               <input type="button" value="Delete" onClick={onSubmit}></input>
               <p></p>
           </form>
       </div>
    )
}

export default Delete