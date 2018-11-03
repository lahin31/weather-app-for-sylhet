import React, { Component } from "react";
import "./showDate.css";

class ShowDate extends Component {
  state = {
    date: null,
    month: null,
    year: null
  };
  getDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var yyyy = today.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    if (dd < 10) {
      dd = "0" + dd;
    }

    this.setState({
      date: dd,
      month: monthNames[today.getMonth()],
      year: yyyy
    });
  };

  componentDidMount() {
    this.getDate();
  }
  render() {
    const { date, month, year } = this.state;
    return (
      <div className="show-date">
        <div className="date">
          <h2>
            {date}
            <span>'th</span>
          </h2>
          <p>
            {month}, {year}
          </p>
        </div>
      </div>
    );
  }
}

export default ShowDate;
