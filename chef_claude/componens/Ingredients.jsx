export default function ({innerref,ingredients, toggleRecipeShown}){
    let ingredientsElements = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);
    return (
        ingredientsElements.length == 0 ? null : <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsElements}</ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div ref={innerref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div>}
            </section>
    )
}