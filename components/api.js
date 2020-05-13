import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

import Home from "../components/Home";
import { info } from "../components/info";

export default class App extends React.Component {
  state = {
    isLoading: true,
    active:'',
    confirmed:'',
    deceased:'',
    recovered:'',
  };

  componentDidMount() {
    fetch("https://api.covid19india.org/state_district_wise.json")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
            active: json[info['state'].state].districtData[info['state'].city].active,
            confirmed: json[info['state'].state].districtData[info['state'].city].confirmed,
            deceased: json[info['state'].state].districtData[info['state'].city].deceased,
            recovered: json[info['state'].state].districtData[info['state'].city].recovered,
            isLoading: false
        });
      });
  }


  render() {
    this.fetchWeather;
    const { isLoading } = this.state.isLoading;
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching The Weather</Text> : <Home active={this.state.active} confirmed={this.state.confirmed} deceased={this.state.deceased} recovered={this.state.recovered} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#fff"
  }
});
