import React, { Component } from "react";
import "./showTime.css";

class ShowTime extends Component {
  state = {
    hour: null,
    minute: null,
    ampm: ""
  };
  componentWillMount() {
    this.getTime();
  }
  getTime = () => {
    let time = new Date();

    let hh = time.getHours();
    let mm = time.getMinutes();
    let ampm = hh >= 12 ? "pm" : "am";

    this.setState({
      hour: hh,
      minute: mm,
      ampm: ampm
    });
  };
  render() {
    const { hour, minute, ampm } = this.state;
    return (
      <div className="show-time">
        <div className="time">
          <h2 style={{ paddingRight: "25px" }}>
            {hour}:{minute}
          </h2>
          <p style={{ textTransform: "uppercase", paddingRight: "25px" }}>
            {ampm}
          </p>
        </div>
      </div>
    );
  }
}

export default ShowTime;
