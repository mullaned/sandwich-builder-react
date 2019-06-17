import React from 'react';
import Sandwich from '../../Sandwich/Sandwich'

import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'
 
const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope you enjoy it!</h1>
      <div style={{width: '100%', margin:'auto'}}>
        <Sandwich ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
    </div>
  )
 
};
 
export default checkoutSummary;