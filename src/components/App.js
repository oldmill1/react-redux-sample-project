import React from 'react'
import IngredientListPage from './IngredientListPage'
import Footer from './Footer'

const App = ({ params }) => (
    <div>
        <IngredientListPage filter={params.filter || 'all'} />
        <Footer />
    </div>
)

export default App
