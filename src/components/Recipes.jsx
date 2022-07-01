import { useState } from "react";

const elvenShieldRecipe = {
    leatherStrips: 2
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonStone: 4,
}


console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);


const Recipes = () => {
    return (
        <div>
            
        </div>
    )
}

export default Recipes