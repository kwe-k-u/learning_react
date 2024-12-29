export default function (props){
    const classLabel = props.isGameOver ? "keypad disable" : "keypad"
   const selectStatus = props.isSelected ? (props.isCorrect ? "right" : "wrong"): ""
    return (
        <button className={`keypad ${props.isGameOver && "disable"} ${selectStatus}`} onClick={!props.isSelected ? props.onclick : ()=>{}}>
            {props.letter}
            
        </button>
    )
}