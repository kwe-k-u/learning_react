/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
import ContactCard from "./ContactCard"

 function App() {
    return (
        <div className="contacts">
        <ContactCard
            img="./images/mr-whiskerson.png"
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
         />
         <ContactCard
             img="./images/fluffykins.png"
             name="Fluffykins"
             phone="(212) 555-2345"
             email="fluff@me.co"
          />
          <ContactCard
              img="./images/felix.png"
              name="Felix"
              phone="(212) 555-4567"
              email="thecat@hotmail.com"
           />
           <ContactCard
               img="./images/pumpkin.png"
               name="Pumpkin"
               phone="(0800) CAT KING"
               email="pumpkin@scrimba.com"
            />
            
            
            
            
        </div>
    )
}

export default App