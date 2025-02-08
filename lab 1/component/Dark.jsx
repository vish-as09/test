import React, { useState } from "react";
import "./Style.css";
function Dark(){
    const[color,setcolor]=useState(false);
    const changecolor=()=>{
        setcolor(!color)
    }
    return(
        <div className={color? "dark":"light"}>
            <h1><b>Change the theme to:</b></h1>
            <h2><b>{color?"DARK THEME":"LIGHT THEME"}</b></h2>
            <button onClick={changecolor}>Change theme to {color?"dark theme":"light theme"}</button>
        </div>
    )
}
export default Dark;