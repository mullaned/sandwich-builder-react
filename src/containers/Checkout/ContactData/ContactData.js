import React, {Component} from 'react';

import classes from './ContactData.css'
import  Button from '../../../components/UI/Button/Button'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: ''
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
          <input className={classes.Input} type="text" name="email" placeholder="Your Email" />
          <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
          <input className={classes.Input} type="text" name="postCode" placeholder="Your Post Code" />
          
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;