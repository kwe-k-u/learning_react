import pads from "./pads"
import {useState} from 'react'

 function Pad(prop){

    return (
    <button   
    className={prop.on ? "on" : undefined}
    onClick={()=>prop.onClick(prop.id)}
    style={{backgroundColor: prop.color}} ></button>
    );
}


export default function App() {
    
function toggle(clickedId){
    setPadState((prevPad)=> prevPad.map((prev)=> prev.id == clickedId ? {...prev,on:!prev.on}:prev))
}
    const [padState, setPadState] = useState(pads)
    const padElements = padState.map((pad)=> <Pad
    onClick={toggle}
    
    key={pad.id}
   { ...pad}
     />)
    return (
        <main>
            <div className="pad-container">
                {padElements}
            </div>
        </main>
    )
}