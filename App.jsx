import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Agent from "./Agent";

import Contact from "./Contact";
import Ticket from "./Ticket";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          
        
             <li><Link to="/agent">Agent</Link></li>
             <li><Link to="/contact">Contact</Link></li>
           <li><Link to="/ticket">Ticket</Link></li>
           
        </ul>

        <Switch>
          <Route path="/agent" component={Agent} />

          <Route path="/contact" component={Contact} />
            
          <Route path="/ticket" component={Ticket} />
       
      
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
