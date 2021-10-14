import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
    };
    this.changeColor = this.changeColor.bind(this);
  };

  changeColor(value) {
    this.setState({
      color: value
    });
  }

  addColor(value, callback) {
    this.setState({
      color: ''
    });
    callback(value);
  }

  render() {
    const { addColor } = this.props;
    const { color } = this.state;
    return (
      <div className="input-color">
        <label htmlFor="input-color">Digite uma cor: </label>
        <input
          id="input-color"
          type="text"
          value={color}
          onChange={(e) => this.changeColor(e.target.value)}
        />
        <button
          type="button"
          onClick={() => this.addColor(color, addColor)}
        >
          Adicionar
        </button>
      </div>

    )
  }
}

InputColor.propTypes = {
  addColor: PropTypes.func.isRequired,
}

export default InputColor;
