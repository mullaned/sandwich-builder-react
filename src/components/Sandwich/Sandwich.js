import React from 'react';
import classes from './Sandwich.css'
import SandwichIngredient from './SandwichIngredient/SandwichIngredient'

const sandwich = (props) => {
  return (
    <div className={classes.Sandwich}>
      <SandwichIngredient type="bread-top" />
      <SandwichIngredient type="cheese" />
      <SandwichIngredient type="meat" />
      <SandwichIngredient type="bread-bottom" />
    </div>
  );
}

export default sandwich;