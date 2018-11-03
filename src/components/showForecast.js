import React, { Component } from "react";
import { Motion, spring } from "react-motion";
import { Consumer } from "../context";
import Forecast from "./forecast";
import "./showForecast.css";

class ShowForecast extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { list, showForecast } = value;
          return (
            <Motion
              defaultStyle={{ x: -200, opacity: 0 }}
              style={{
                x: spring(showForecast ? 0 : -200),
                opacity: spring(showForecast ? 1 : 0)
              }}
            >
              {style => (
                <div
                  style={{
                    transform: `translateX(${style.x}px)`,
                    opacity: style.opacity
                  }}
                  className="show_forecast"
                >
                  {list.slice(0, 10).map((eachList, i) => {
                    return <Forecast eachList={eachList} key={i} />;
                  })}
                </div>
              )}
            </Motion>
          );
        }}
      </Consumer>
    );
  }
}

export default ShowForecast;
