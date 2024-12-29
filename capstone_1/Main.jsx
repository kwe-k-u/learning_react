import DiceElement from "./components/diceElement"
import {useState, useEffect} from "react"

export default ()=>{
    const [values,setValues] = useState(()=>generateDice())

    let isWon = false;
    if(values.every(die => die.isHeld) && values.every(die=>die.value == values[0].value)){
        isWon = true;
    }


    


    const diceList = values.map((val,index)=><DiceElement
     key={index}
     value={val.value}
     isHeld={val.isHeld}
     onClick={()=>{holdDie(index)}}
     />)

     function holdDie(index){
        setValues((oldVals)=>{
            return oldVals.map((die)=>{
                return die.index !== index ? die :{
                    ...die,
                    isHeld: !die.isHeld
                }
            })
        })

     }
     
    function generateDice(){
        return new Array(10)
        .fill(0)
        .map((_,index) => ({
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            index :index
        }))
    }

    function rollDice(){
        let newDice = generateDice()
        setValues((prev)=> {
            return prev.map((old,index)=>{
                if (old.isHeld){
                    return old;
                }
                return newDice[index];
            })
        })
    }

    function resetGame(){
        setValues((old)=> generateDice())
    }


    return (
        <>
            <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="dieContainer">
                {diceList}
                </div>
               {isWon ? <button onClick={resetGame} className="rollBtn">New Game</button> :
               <button onClick={rollDice} className="rollBtn">Roll</button>
               }
            </main>
        </>
    )
}