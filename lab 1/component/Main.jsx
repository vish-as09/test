import React from "react";

function Main(){
    return(
        <div
        style={{
        height: "70vh",
        backgroundColor: "#9F2B68",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "cursive",
        fontSize: "1.5rem",
            
        }}>
            <p style={{color:"CYAN"}}>
            React components receive data and 
            return what should appear on the screen. You can
             pass them new data in response to an interaction, 
             like when the user types into an input. React will 
             then update the screen to match the new data.
            </p>
            <p style={{color:"CYAN"}} >React (also known as React.js or ReactJS) is a free 
                and open-source front-end JavaScript library
                 that aims to make building user interfaces 
                based on components more "seamless".
                 It is maintained by Meta (formerly Facebook) and a 
                 community of individual developers and companie</p>
        </div>
    )
}
export default Main;