
import {languages} from "./languages"
import Message from "./components/Message"
import Keypad from "./components/Keypad"
import WordBox from "./components/WordBox";
import LanguageBox from "./components/LanguageBox";
import {useState} from "react"
import {chooseWord, getFarewellText} from "./utils"




export default function (){
// States 
const [selectedLetters,setSelectedLetters] = useState([])
const [chosenWord,setChosenWord] = useState(()=>chooseWord())
const [removedLanguage,setRemovedLanguage] = useState(null)
// const [messageText,setMessageText] = useState(null)

const gameOver = selectedLetters.filter((l)=> !chosenWord.includes(l)).length == 8 || chosenWord.split("").every(l=> selectedLetters.includes(l));
const won = gameOver && chosenWord.split("").every(l=> selectedLetters.includes(l))
let lastLanguage = -1;


// console.log(chosenWord)
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
const languageElements = languages.map((lang,index) =>{
    //get the number of selected letters that aren't in the chosen word
    const wrongLetters = selectedLetters.filter((l)=> !chosenWord.split("").includes(l)).length
   
    if (wrongLetters > index){
    lastLanguage = index;

    }
    return <LanguageBox
     key={lang.name} 
     {...lang} 
     isremoved={wrongLetters > index}
     />});

const keypadElements = alphabet.split("").map(k=> <Keypad 
        key={k} 
        letter={k}
    isGameOver = {gameOver}
        isSelected = {selectedLetters.includes(k)}
        isCorrect = {chosenWord.split("").includes(k)}
        onclick={()=>{keyPressed(k)}}
    />)
    // if (selectedLetters.length > 0 && !chosenWord.includes(selectedLetters[selectedLetters.length])){
    //     setMessageText((old)=> getFarewellText(languages[lastLanguage]))
    // }
    const messageText = lastLanguage != -1 ? getFarewellText(languages[lastLanguage].name) : null

const wordBoxElements = chosenWord.split("").map((letter,index)=> <WordBox
    key={index} 
    letter={letter}
    isSelected = {selectedLetters.includes(letter)} 
 />)




function keyPressed(k){
    if(!gameOver){
        setSelectedLetters((oldList)=> [...oldList,k])
    }
}

function resetGame(){
    setChosenWord(()=>chooseWord())
    setSelectedLetters((_)=>[])
}
   

    return (
    <main>
        <header>
            <h1>Assembly:Endgame</h1>
            <p>
                Guess the word in under 8 attempts to keep the programming
                world safe from Assembly
            </p>
            {messageText && <Message
             text={messageText}
             isGameOver={gameOver}
             playerWon={won} 
             />}
        </header>


        <div className="languageSection">
            {languageElements}
        </div>

        <div className="wordBoxSection">
            {wordBoxElements}
        </div>
        

        <div className="keyboard">
            {keypadElements}
        </div>

        {gameOver && <button onClick={()=>resetGame()}className="gameOverBtn">New Game</button>}
    </main>
    )
}