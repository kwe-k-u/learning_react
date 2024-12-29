

export default function(props){
    const text = props.isGameOver ? (props.playerWon ? "You Win" : "GameOver") : props.text
    const subText = props.isGameOver ? (props.playerWon ? "Well done! 🎉" : "You lose! Better start learning Assembly 😭") : ""
    
    return(
    <div id="messageBox"
    style={props.isGameOver ? { backgroundColor: props.playerWon ? "green" : "red"}: {}}>
        <p>{text}</p>
        {props.isGameOver && <p>{subText}</p>}
    </div>)
}