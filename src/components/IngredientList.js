import React from 'react'

// Todo: Add PropTypes
const IngredientList = ({ ingredients }) => (
    <ul>
        {ingredients.map(ingredient =>
            <li key={ingredient.id}>{ingredient.name}</li>
        )}
    </ul>
)

export default IngredientList
