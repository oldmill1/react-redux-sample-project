const ingredients = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name
                }
            ]
       default:
            return state
    }
}

export default ingredients
