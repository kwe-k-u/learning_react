import {useState, useRef} from "react";
import Recipe from "./Recipe"
import IngredientElement from "./Ingredients"
import recipeSample from "../ai_response"
import { useEffect } from "react";
 
export default function (){
    const [ingredients,setIngredients] = useState([])
    const [showRecipe,setShowRecipe] = useState(true)
    const [recipeReponse,setRecipe] = useState(null)
    const recipeSection = useRef(null)


    function addIngredient(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        // ingredients.push(formData.get("newIngredient"))
        setIngredients((prev)=>[...prev,formData.get("newIngredient")])
    }

    function toggleRecipeShown(){
        setShowRecipe((prev)=>!prev)
        setRecipe((prevRecipe)=>recipeSample)
    }

    useEffect(()=>{
        if(recipeReponse != null && recipeSection.current != null){
        console.log(recipeReponse,recipeSection.current)
            recipeSection.current.scrollIntoView()
        }
    },[recipeReponse])



    return (
        <main className="row">
            <form onSubmit={addIngredient} className="addIngredientForm">
                <input 
                    type="text" 
                    placeholder="e.g. onions"
                    name="newIngredient"
                />
                <button>Add Ingredient</button>
            </form>
            {
                <IngredientElement innerref={recipeSection} ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} />
            }
            {
                showRecipe &&
                <Recipe recipe={recipeReponse}/>
            }
        </main>
    )
}