import React,{useState} from "react";
 function counter(){
    const [count,setCount]=useState(0)
    function increment(){
        setCount(count+1);
    
        
    }
    function dec(){
        setCount(count-1);

        }
    function reset(){
        setCount(0);
    }
    return(
        <div style={{
            fontFamily:"algerian",
            fontWeight:"bolder",
            height:"20vh",
            color : "purple",
            backgroundColor : "turquoise",
            alignItems:"center",
            fontSize:"20px",
            padding:"5px",
            marginTop:"20px"
        }}>
            <p>COUNT :{count}</p><br />
            <button onClick={increment}style={{
                backgroundColor:"aquamarine",
                fontFamily:"fantasy",
                color:"hotpink",
                padding:"5px",
                fontSize:"1.5 em",
                borderStyle:"dashed",
                marginRight:"5px"
            }}>INCREMENT </button>
            <button onClick={dec}style={{
                backgroundColor:"aquamarine",
                fontFamily:"fantasy",
                color:"hotpink",
                padding:"5px",
                borderStyle:"groove",
                marginRight:"5px"
            }}>DECREMENT</button>
            <button onClick={reset}style={{
                backgroundColor:"aquamarine",
                fontFamily:"fantasy",
                color:"hotpink",
                padding:"5px",
                borderStyle:"dotted",
                marginRight:"5px"
            }}> RESET</button>
        </div>
    )

 }
export default counter;
