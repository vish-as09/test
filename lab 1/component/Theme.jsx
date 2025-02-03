import React, { useState } from "react";
 function Theme(){
    const[color,setcolor]=useState("");
    function changecolor(e){
        setcolor(e.target.value);
    }
    return(
      <div style={{backgroundColor:color,height:"50vh",
         marginTop:"20px"
      }}>
         <input type="text" placeholder="ADD COLOR" onChange={changecolor} />
      </div>
    )
 }
 export default Theme;