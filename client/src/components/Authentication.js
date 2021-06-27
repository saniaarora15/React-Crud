import React,{useState} from "react"
import Axios from "axios"
import {useHistory} from "react-router-dom"

function Authentication(){
  let history=useHistory()
  const [email,setEmail]=useState("")
  const [pass,setPass] = useState("")
  
  const save = () => {
       Axios.post("http://localhost:3001/login",{email:email,pass:pass}).then((response)=>{
            console.log(response)
            return response;
       }).then(data=>{
         if(data.status === 201){
         history.push("/components/View")
         window.location.reload();
         }else{
         history.push("/")
         }
       })
  } 

  return (
    <div className="App">
      <p></p>
      <div className="log">
      <form className="table border shadow">
        <p></p>
      <h2>Login</h2>
        <p><input type="text" id="email" name="email"  placeholder="email" required onChange={(e)=>{
              setEmail(e.target.value)
        }

        }></input></p>
        <p><input type="password" id="pass" name="pass"  placeholder="password" autoComplete="on" required onChange={(e)=>{
              setPass(e.target.value)
        }

        }></input></p>
        <button className="btn btn-primary mr-auto" onClick={save}> Enter</button>
        <p></p>
      </form>
      </div>
      <p></p>
      <br></br>
      </div>
  )}

  export default Authentication