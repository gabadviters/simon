import { useState } from "react";

const Card = ({id, flipped, patron})=> {


    return(
        <button id={id}  className= {`w-40 h-40  m-3 ${flipped ? "bg-slate-600":"bg-slate-200"} `} >

        </button>
    )
}


export default Card;