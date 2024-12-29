import Navbar from "./components/Navbar"
import Entry from "./components/Entry"
import articles from "./data"

export default function App(){
    console.log("now")
    const articleEntries = articles.map((e)=> (<Entry 
        key={e.id}
        title={e.title} 
        img={e.img}
        dates={e.dates}
        id={e.id}
        country={e.country}
        text={e.text}
        link={e.googleMapsLink}
        />
        ))
    return (
        <>
        <Navbar />
        {articleEntries}
        
        </>
    )
}