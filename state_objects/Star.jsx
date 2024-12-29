
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function ({isFavorite,onClick}){
    return <button
    aria-pressed={false}
    className="favorite-button"
    onClick= {onClick}
>
    <img
        src={isFavorite ? starFilled : starEmpty}
        alt="empty star icon"
        className="favorite"
    />
</button>
}