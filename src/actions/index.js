import { v4 } from 'uuid'

export const addIngredient = (text) => ({
    type: 'ADD_INGREDIENT',
    payload: {
        id: v4(),
        name,
        type
    }
})
