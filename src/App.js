import React, { Component } from "react";
import Provider from "./context";
import ShowTemp from "./components/showTemp";
import Navbar from "./components/navbar";
import ShowDate from "./components/showDate";
import ShowTime from "./components/showTime";
import "./App.css";
import ShowForecast from "./components/showForecast";

class App extends Component {
  state = {
    city: "",
    country: ""
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchWeather = (dispatch, e) => {
    e.preventDefault();
    let res_obj = {
      city: this.state.city,
      country: this.state.country
    };
    dispatch({ type: "SEARCH_CITY", payload: res_obj });
    this.setState({ city: "", country: "" });
  };

  render() {
    return (
      <Provider>
        <Navbar />
        <div className="container">
          <img
            className="bg"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/6/6b/Tea_Garden_in_Malini_chora_Sylhet_Bangladesh_%283%29.JPG"
            }
            alt=""
          />
          <div className="bottom-right">
            <ShowTemp />
          </div>
          <div className="bottom-right-date">
            <ShowDate />
          </div>
          <div className="bottom-right-time">
            <ShowTime />
          </div>
          <div className="top-left-forecast">
            <ShowForecast />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
