import React from 'react';
import { withRouter } from 'react-router-dom'
import classes from './Sandwich.css'
import SandwichIngredient from './SandwichIngredient/SandwichIngredient'

const sandwich = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
          .map((_, i) => {
            return <SandwichIngredient key={igKey + i} type={igKey} />;
          }
        )
      }
    )
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
  
    if(transformedIngredients.length === 0) {
      transformedIngredients = <p>Please Start Adding Ingredients</p>
    }
  
  
    return (
    <div className={classes.Sandwich}>
      <SandwichIngredient type="bread-top" />
      {transformedIngredients}
      <SandwichIngredient type="bread-bottom" />
    </div>
  );
}

export default withRouter(sandwich);