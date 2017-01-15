import { connect } from 'react-redux'
import IngredientList from './IngredientList'

const mapStateToProps = (state) => ({
    ingredients: state.ingredients
})

const IngredientListPage = connect(mapStateToProps)(IngredientList)

export default IngredientListPage
