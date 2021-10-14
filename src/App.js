import React, { Component } from 'react';
import InputColor from './components/InputColor';
import './App.css';
import Color from './components/Color';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorList: [],
    };

    this.addColor = this.addColor.bind(this);
  }
  addColor(color) {
    this.setState((state) => ({ colorList: [...state.colorList, color] }));
  }
  render() {
    const { colorList } = this.state;
    return (
      <div className="App">
        <section className="App-header">
          <InputColor addColor={(color) => this.addColor(color)} />
          {colorList &&
            <ul>
            {
              colorList.map((color, index) => (
                <li key={index + 1}>
                  <Color contentColor={color} style={color}/>
                </li>
              ))
            }
          </ul>
          }
        </section>
      </div>
    );
  }
}

export default App;
