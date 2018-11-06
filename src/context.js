import React, { Component } from "react";

const Context = React.createContext();
const API_KEY = "abacd002734db40c2a0707492fb41afc";

const reducer = (state, action) => {
  if (action.type === "TOGGLE_FORECAST") {
    return {
      ...state,
      showForecast: action.payload
    };
  }
};

export default class Provider extends Component {
  state = {
    city: "",
    country: "",
    current_temp: null,
    list: [],
    showForecast: false,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async getOnlyWeather() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=sylhet,bangladesh&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    this.setState({
      city: data.name,
      country: data.sys.country,
      current_temp: data.main.temp
    });
  }

  async getDetailsForecast() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=sylhet,bangladesh&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    this.setState({
      list: data.list
    });
  }

  async getWeather() {
    await Promise.all([this.getOnlyWeather(), this.getDetailsForecast()]);
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
