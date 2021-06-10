import React,{useState,useContext} from "react";
import myContext from "./context/context";

import Herosection from "./components/heroSection"

const App = () =>{
  const currentTheme=useState("dark");
  
  return(
< myContext.Provider value={currentTheme}>
  <div>
    
     { console.log(currentTheme)}
  
    <Herosection/>
  </div>

</myContext.Provider>
  )}

export default App;