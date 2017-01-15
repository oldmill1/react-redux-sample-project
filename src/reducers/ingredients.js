const ingredients = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    type: action.payload.type
                }
            ]
       default:
            return state
    }
}

export default ingredients
