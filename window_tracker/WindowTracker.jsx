import React from "react"


export default function WindowTracker() {
    const [windowSize,setWindowSize] = React.useState(window.innerWidth)
    React.useEffect(()=>{
        function trackWidth(){
                setWindowSize((prev)=>window.innerWidth)
        }
            window.addEventListener("resize", trackWidth)
            return function (){
                window.removeEventListener("resize",trackWidth)
            }

    },
        [windowSize])
    return (
        <h1>Window width: {windowSize}</h1>
    )
}