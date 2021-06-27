import React from "react"
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Authentication from "./components/Authentication";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Edit from "./components/Edit";
import Add from "./components/Add";
import Del from "./components/Del";
import View from "./components/View";


function App() {
     return( 
          <Router>
           <div>
          <Switch>
            <Route exact path="/" component={Authentication}></Route>
            <Route exact path="/components/Add" component={Add}></Route>
            <Route exact path="/components/Edit" component={props=> <Edit{...props}/>}></Route>
            <Route exact path="/components/Del" component={props=> <Del{...props}/>}></Route>
            <Route exact path="/components/View" component={View}></Route>
          </Switch>
          </div>
        </Router>
          
     )
}

export default App
