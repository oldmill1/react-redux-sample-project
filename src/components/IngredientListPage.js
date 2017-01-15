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

// "ownProps" means the filter passed to the
// connect component we are writing, eg.
// <IngredientListPage filter="all" />
const mapStateToProps = (state, ownProps) => ({
    ingredients: getIngredients(
        state.ingredients,
        ownProps.filter
    )
})

const IngredientListPage = connect(mapStateToProps)(IngredientList)

export default IngredientListPage
