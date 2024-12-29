import WindowTracker from "./WindowTracker"
import {useState} from "react"

export default function App() {

    const [show,setShow] = useState(true)
    
    return (
        <main className="container">
            <button onClick={()=> setShow((prevVal)=> !prevVal)}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </main>
    )
}