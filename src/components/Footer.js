import React from 'react'
import FilterLink from './FilterLink'

const Footer = () => (
    <p>
        Show: {" "}
        <FilterLink filter="all">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="produce">
            Produce
        </FilterLink>
        {", "}
        <FilterLink filter="meat">
            Meat
        </FilterLink>
    </p>
)

export default Footer
