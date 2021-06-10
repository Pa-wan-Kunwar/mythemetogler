import React,{useContext} from "react";
import myContext from "./context/context.js";

const Toggler = () =>{
    var [theme,setTheme] = useContext(myContext);
    
    return(
        
        <div>
            <button
             onClick={()=>{ console.log(theme);
                setTheme(theme==="light"?"dark":"light")
                console.log([theme,setTheme]);
             }
                 
             }>
                {theme==="light"? "lights Off" :"lights On"}
            </button>
        </div>
    )
}

export default Toggler;