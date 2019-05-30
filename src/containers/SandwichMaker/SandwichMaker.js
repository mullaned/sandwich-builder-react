import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary'
import Sandwich from '../../components/Sandwich/Sandwich'
class SandwichMaker extends Component {
  render() {
    return (
      <Aux>
        <Sandwich />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default SandwichMaker;