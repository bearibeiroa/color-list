import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
  render() {
    const {contentColor} = this.props
    return (
      <div className="item-color" style={{color: contentColor}}>
        {contentColor}
      </div>
    )
  }
}

Color.propTypes = {
  contentColor: PropTypes.string.isRequired,
}

export default Color;
