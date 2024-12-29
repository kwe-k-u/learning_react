export default function (props){
    return <div className="wordBox">
        {props.isSelected && <p>{props.letter}</p>}
    </div>
}