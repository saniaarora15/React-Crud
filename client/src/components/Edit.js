import React,{useState} from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom"


function Edit(){
    let history=useHistory()
    const[name,setName]=useState("")
    const[id,setId]=useState("")

    const onSubmit = async e=> {
        
       await Axios.post("http://localhost:3001/edit",{id:id,name:name}).then((response)=>{
             console.log(response)
             history.push("/components/view")
        })
    }
    
    return(
       <div className="App">
           <form className="table border shadow" onSubmit={e=>onSubmit(e)} >
               <h2>Edit</h2>
             <p><input type="text" name="id" placeholder="Id"required onChange={(e)=>{
              setId(e.target.value)
        }

        }></input></p>
             <p>  <input type="text" name="name"  placeholder="Name" required onChange={(e)=>{
              setName(e.target.value)
        }

        }></input></p>
               <input type="button" value="Update" onClick={onSubmit}></input>
           </form>
       </div>
    )
}

export default Edit;