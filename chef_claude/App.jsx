/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */
import Header from "./componens/Header"
import MainComponent from "./componens/MainComponent"
 export default function App() {
    return (
      <>
        <Header />
        <MainComponent />
      </>
    )
  }
  