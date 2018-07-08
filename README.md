# Introduction to CSS Grid

https://css-tricks.com/snippets/css/complete-guide-grid/

CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system. You work with Grid Layout by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items).


## Terminology

Terminology | Definition
----------- | ------------
Grid Container | The parent element, with property `display: grid`
Grid Item | A child element of the grid container
Grid Line | The lines between grid items (1-indexed)
Grid Track | A column or row in the grid
Grid Cell | The smallest space between grid lines
Grid Area | Any area between grid lines (a combination of cells)


## Parent Properties

Property Name | Description | Possible Values
--- | --- | ---
`display` | Defines the element as a grid container | `grid`, `inline-grid`
`grid-template-columns`, `grid-template-rows` | Defines columns and rows of the grid | [ line-name ] (optional), [ track-size ] e.g. `[first] 40px [mid] 40px [last] 50px`. We can use fractional units here (`1fr 1fr 1fr`)
`gird-template-areas` | Defines grid areas | [ grid-area-name ]


## Child Properties

Property Name | Description | Possible Values
--- | --- | ---
`grid-area` | Gives the name of the grid area defined in the parent property `grid-template-areas` | [ grid area name ]



