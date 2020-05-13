// In App.js in a new project

import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
// navigation import

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// component import here
import Homepage from "./components/Home";
import Maps from "./components/map";
import Search from "./components/coronameter";
import Regester from "./components/regester";
import Navi from "./components/navigation";
import { info } from "./components/info";

// api work here

// routing here
// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.first}>
//         <Homepage />
//       </View>
//       <View style={styles.Button}>
//         <TouchableOpacity onPress={() => navigation.navigate("Details")}>
//           <Icon name="search" size={25} color={"#ff0303"} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//           <Icon name="home" size={25} color={"#038eff"} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("Map")}>
//           <Icon name="map" size={25} color={"#38d638"} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// function DetailsScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.first}>
//         <Search />
//       </View>
//       <View style={styles.Button}>
//         <TouchableOpacity onPress={() => navigation.navigate("Details")}>
//           <Icon name="search" size={25} color={"#ff0303"} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//           <Icon name="home" size={25} color={"#038eff"} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("Map")}>
//           <Icon name="map" size={25} color={"#03ff3a"} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// function MapScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.first}>
//         <Maps />
//       </View>
//       <View style={styles.Button}>
//         <TouchableOpacity onPress={() => navigation.navigate("Details")}>
//           <Icon name="search" size={25} color={"#ff0303"} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//           <Icon name="home" size={25} color={"#038eff"} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("Map")}>
//           <Icon name="map" size={25} color={"#03ff3a"} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

function App() {
  if (info["state"].condition === "") {
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <Regester />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <Navi />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(52, 52, 52, .1)",
    height: "100%"
  },
  Button: {
    borderRadius: 20,
    marginLeft: "3%",
    marginRight: "3%",
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 0.3,
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
    bottom: "3%",
    width: "94%",
    zIndex: 1
  },
  buttonItem: {},
  first: {
    flex: 9
  }
});

export default App;
