import React,{useContext} from "react";
import myContext from "../context/context.js";
import Colors from "../components/themes";
import Toggler from "../toggler.js";

const Herosection =()=>{
    const theme = useContext(myContext)[0];
    const currentTh=Colors[theme];
    return(
        <div style={{
            backgroundColor:`${currentTh.background}`,
            color:`${currentTh.textColor}`,
            textAlign:"center",
            padding:"5px"
        }}>
            <h1>I am a good heading</h1>
            <ul>I am a good list</ul>
            <Toggler/>
        </div>
    )
    
}

export default Herosection;