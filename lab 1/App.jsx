import React from "react";
import Headers from "./component/header"; 
import Footer from "./component/footer";
import Main from "./component/main";
import Counter from "./component/Counter";
import Theme from "./component/Theme";
import To from "./component/To";
function app(){
  return(
    <div>
      <Headers/>
      <Footer/>
      <Main/>
      <Counter/>
      <Theme/>
      <To/>
    </div>
  )
}
export default app;