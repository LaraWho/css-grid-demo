# Introduction to CSS Grid

Thanks to [Chris House at css-tricks.com](https://css-tricks.com/snippets/css/complete-guide-grid/) for the information in this guide


> CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system. You work with Grid Layout by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items).

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
`justify-items`, `align-items`, `place-items` | position grid items horizontally and vertically. Place-items is shorthand for both. | `start`, `center`, `end`, `stretch`
`justify-content`, `align-content` | Use if the total size of your grid is less than the size of the grid container | `start`, `center`, `end`, `stretch`, `space-evenly`, `space-between`, `space-around`


## Child Properties

Property Name | Description | Possible Values
--- | --- | ---
`grid-area` | Gives the name of the grid area defined in the parent property `grid-template-areas` | [ grid area name ]
`grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end` | Determines a grid item's location within the grid by referring to specific grid lines. | line number or name of grid cell [span col-4] (will span 1 by default)
`grid-column`, `grid-row` | shorthand for `grid-column-start` + `grid-column-end` etc. | e.g. `3 / span 2`
`grid-area` | Gives an item a name so that it can be referenced by a template created with the `grid-template-areas`. Can also be shorthand for `grid-row-start` + `grid-column-start` + `grid-row-end` + `grid-column-end`, separated by `/` | [grid area name] or four values separated by `/`
`justify-self` | Aligns a grid item horizontally | `start`, `end`, `center`, `stretch`
`align-self` | Aligns a grid item vertically | `start`, `end`, `center`, `stretch`
`place-self` | Sets align-self and justify-self properties | [align-self value] / [justify-self value]

## Other things

Use grid-auto-rows or grid-auto-columns instead of templates: e.g. `grid-auto-rows: 50px` or `grid-auto-rows: minmax(50px, auto)`

Make a grid item a grid container by giving it `display: grid`! Grids within grids. 

expirement with media queries like in section-3! 

To run this demo, first install dependencies by running `npm i`, then start the dev server with `npm start`







