import { languages } from "../languages"

export default function (props){
    const customStyle = {
        backgroundColor: props.backgroundColor,
        color: props.color,
         opacity: (props.isremoved ? 0.4 : 1)
    }
    return (
        <button className="languageBox"
        style={customStyle}
        >
        {props.name}
        </button>
    )
}