import React, { useState } from "react";


export default function Pratice(){

    const [state,setState] = useState(0)
 
      function  handle(){
          setState(state+1);
      }
      
        return( 
        <div>
            <h1>{state}</h1>
            <button onDoubleClick={handle}>+</button>
        </div>
    );
 
}
 