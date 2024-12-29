export default function (prop){
    return (
        <button className={`diceElement ${prop.isHeld && "isHeld"}`}
        onClick={prop.onClick}>
            {prop.value}
        </button>
    )
}