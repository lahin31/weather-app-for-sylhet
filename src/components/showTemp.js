import React from "react";
import { Consumer } from "../context";
import "./showTemp.css";

class ShowTemp extends React.Component {
  toggleForecast = (showForecast, dispatch) => {
    showForecast = !showForecast;
    dispatch({
      type: "TOGGLE_FORECAST",
      payload: showForecast
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { current_temp, city, showForecast, dispatch } = value;
          return (
            <div
              className="show_temp"
              onClick={() => this.toggleForecast(showForecast, dispatch)}
            >
              <h2>
                {current_temp}
                <span>&#x2103;</span>
              </h2>
              <p>{city}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default ShowTemp;
