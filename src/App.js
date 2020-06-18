import React, { Component } from "react";
import Grid from "./components/grid.jsx";
import ColorPicker from "./components/color_picker.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.onColorClick = this.onColorClick.bind(this);

    this.state = {
      currentColor: "#ff4d4d",
      gridKey: 0,
    };
  }

  onColorClick(color) {
    console.log("Changed selected color to " + color);
    this.setState({ currentColor: color });
  }

  render() {
    return (
      <div className="App">
        <div className="d-flex justify-content-around align-items-center top-bar">
          <h1 className="inline">Pixel Planner</h1>
          <div className="dropdown inline">
            <button
              className="btn btn-secondary dropdown-toggle inline"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Load
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8">
            <div className="grid">
              <Grid
                currentColor={this.state.currentColor}
                key={this.state.gridKey}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <p>Pick a color</p>
            <ColorPicker onClick={this.onColorClick} />

            <div className="shape-box">
              <p className="no-margin">Generate shapes</p>
              <p class="small-text">Click and drag</p>

              <div className="inline">
                <button className="btn btn-light">Rectangle</button>
                <button className="btn btn-light">Circle</button>
              </div>
            </div>

            <button
              className="btn btn-light"
              onClick={() => {
                if (this.state.gridKey === 0) {
                  this.setState({ gridKey: 1 });
                } else {
                  this.setState({ gridKey: 0 });
                }
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
