import { connect } from 'react-redux'
import IngredientList from './IngredientList'
import { withRouter } from 'react-router'

const getIngredients = (ingredients, filter) => {
    switch (filter) {
        case 'all':
            return ingredients
        case 'produce':
            return ingredients.filter(i => i.type === 'produce')
        case 'meat':
            return ingredients.filter(i => i.type === 'meat')
        default:
            throw new Error('Unknown filter: ${filter}')
    }
}

const mapStateToProps = (state, { params }) => ({
    ingredients: getIngredients(
        state.ingredients,
        params.filter || 'all'
    )
})

const IngredientListPage = withRouter(connect(mapStateToProps)(IngredientList))

export default IngredientListPage
