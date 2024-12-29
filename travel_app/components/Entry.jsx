export default function (props) {
    return (
        
        <article className="row">
            
            <img className="entryImage" src={props.img.src} alt={props.img.alt} srcset="" />
            <div className="column entry-info-section">
                <div className="row top-row">
                    <img src="/src/assets/marker.png" alt="" className="locationIcon" />
                    <span className="locationName">{props.country}</span>
                    <a href={props.link}>View on Google Maps</a>
                </div>
                <h2> {props.title}</h2>
                <div className="dates">{props.dates}</div>
                <p>{props.text}</p>
            </div>
        </article>
    )
}