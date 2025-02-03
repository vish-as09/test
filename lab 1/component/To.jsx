import React, { useState } from "react";
function to(){
    const [task,setTask]= useState("");
    const [tasklist,settasklist]=useState([]);
    function savetask(e){
        setTask(e.target.value);

    }
    function addtask(){
        settasklist([...tasklist,task]);
    }
    return(
        <div style={{
            backgroundColor:"#FCE96A"
        }}>
            <h1>ADD Task</h1>
            <input type="text" placeholder="add task" onChange={savetask}/><br />
            <button onClick={addtask}>ADD</button>  
            <button type="reset">RESET</button>
            <p>List</p>
            <ul>
                {tasklist.map(function(val,index){
                    return <li>{val}</li>
                })}
            </ul>
        </div>
        
    )

}
export default to;
