import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateRoute } from './actions';

class Cart extends Component {
  componentWillMount() {
    this.props.updateRoute(this.props.match.path)
  }
  render() {
    return (
      <div>
        <div>Im in the fuckin Cart</div>
      </div>
    );
  }

}

export default connect(null, { updateRoute })(Cart);
