import React from 'react';
import classes from './Sandwich.css'
import SandwichIngredient from './SandwichIngredient/SandwichIngredient'

const sandwich = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
          .map((_, i) => {
            return <SandwichIngredient key={igKey + i} type={igKey} />;
          }
        )
      }
    )
  return (
    <div className={classes.Sandwich}>
      <SandwichIngredient type="bread-top" />
      {transformedIngredients}
      <SandwichIngredient type="bread-bottom" />
    </div>
  );
}

export default sandwich;