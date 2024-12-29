import React from "react"

export default function App() {
    let [count, setCount] = React.useState(0)
    
    /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */
    
    function add() {
        setCount((prev)=> prev + 1)
        
    }    
    function subtract(){
        setCount((prev)=> prev - 1)

    }
    
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
