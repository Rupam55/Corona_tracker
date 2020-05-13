// In App.js in a new project

import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
// navigation import

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// component import here
import Homepage from "../components/api";
import Maps from "../components/map";
import Search from "../components/coronameter";
import { info } from "../components/info";

// work here


const add = () => {
    alert("follow me on github, linkedIn, facebook and specialy on instagram.");
  };
// routing here
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Homepage />
      </View>
      <View style={styles.Button}>
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <Icon name="search" size={30} color={"#ff0303"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="home" size={30} color={"#038eff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Icon name="map" size={30} color={"#38d638"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Search />
      </View>
      <View style={styles.Button}>
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <Icon name="search" size={25} color={"#ff0303"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="home" size={25} color={"#038eff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Icon name="map" size={25} color={"#03ff3a"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Maps />
      </View>
      <View style={styles.Button}>
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <Icon name="search" size={25} color={"#ff0303"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="home" size={25} color={"#038eff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Icon name="map" size={25} color={"#03ff3a"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "corona app",
            headerRight: () => (
              <TouchableOpacity
              style={{marginRight:10}} 
              onPress={add}>
                <Icon name="info-circle" size={25} color={"#3fc1c9"} />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "News", animationTypeForReplace: "pop" }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Corona Map", animationTypeForReplace: "pop" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cfcfcf",
    flex:1
  },
  Button: {
    borderRadius: 20,
    marginLeft: "3%",
    marginRight: "3%",
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // position: "absolute",
    // bottom: "2%",
    // width: "94%",
    height:'8%'
  },
  buttonItem: {},
  first: {
    height:'90%'
  },
  shadow: {
    elevation: 5
  }
});

export default App;
