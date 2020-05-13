import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  RefreshControl
} from "react-native";
import { info } from "./info";
import App from "../components/navigation";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var i=0;

function regester({ navigation }) {

  if(i===0){
  alert("please enter correct state and city details. PLEASE!");
  i=1;
  }
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [array, setarray] = useState([]);

  const inputname = enteredText => {
    setname(enteredText);
  };
  const inputage = enteredText => {
    setage(enteredText);
  };
  const inputcity = enteredText => {
    setcity(enteredText);
  };
  const inputstate = enteredText => {
    setstate(enteredText);
  };

  const add = () => {
    info["state"].condition = "done";
    info["state"].name = name;
    info["state"].age = age;
    info["state"].city = city;
    info["state"].state = state;
    this._textInput.setNativeProps({text: ''});
    console.log('2');
    if(info["state"].condition === "done"&&info["state"].name !== ''&&info["state"].age !== '' && info["state"].city !== '' && info["state"].state !== '')
    {
      alert(info["state"].condition);
      navigation.reset({
        index: 0,
        routes: [{ name: 'N' }],
});
    }else{
      alert('please fill all the blanks')
      navigation.navigate('R')
    }
    this._textInput.setNativeProps({text: ''});
    console.log('2');
  };
    return (
      <View style={styles.container}>
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            alignSelf: "center",
            marginBottom: 30
          }}
          source={require("../assets/icon-infected.png")}
        />
        <Text style={(styles.internal, {})}>
          I welcome you to the corona information application.
        </Text>
        <Text style={styles.internal}>Please add your information here.</Text>
        <View>
          <TextInput
            ref={component => this._textInput = component}
            placeholder="enter name here"
            placeholderTextColor="#3fc1c9"
            style={styles.text}
            onChangeText={inputname}
            value={name}
          />
          <TextInput
            ref={component => this._textInput = component}
            placeholder="enter age here"
            placeholderTextColor="#3fc1c9"
            style={styles.text}
            onChangeText={inputage}
            value={age}
          />
          <TextInput
            ref={component => this._textInput = component}
            placeholder="enter city here"
            placeholderTextColor="#3fc1c9"
            style={styles.text}
            onChangeText={inputcity}
            value={city}
          />
          <TextInput
            ref={component => this._textInput = component}
            placeholder="enter state here"
            placeholderTextColor="#3fc1c9"
            style={styles.text}
            onChangeText={inputstate}
            value={state}
          />

          <TouchableOpacity style={styles.button} onPress={add}>
            <View style={styles.but}>
              <Text style={{ color: "#FFFFFF" }}>ADD</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}

function nw(){
  return (
      <View style={styles.containernew}>
        <App />
      </View>
    );
}

const Stack = createStackNavigator();

function main() {
      return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="R" headerMode='none'>
          <Stack.Screen name="R" component={regester}/>
          <Stack.Screen name="N" component={nw}/>
        </Stack.Navigator>
      </NavigationContainer>
      ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  containernew: {
    flex: 1,
  },
  internal: {
    alignSelf: "center",
    margin: 10,
    marginBottom: 30
  },
  text: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
    height: "10%",
    paddingLeft: 20
  },
  button: {
    margin: 10,
    alignSelf: "flex-end",
    borderRadius: 20,
    height: "10%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3fc1c9"
  }
});

export default main;

// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet
// } from "react-native";
// import { info } from "./info";
// import App from "../components/navigation";

// class Inputs extends Component {
//   constructor() {
//     super();
//     this.main =this.main.bind(this)
//     this.state = {
//       email: "",
//       password: "",
//       isdone: ""
//     };
//   }
//   handleEmail = text => {
//     this.setState({ email: text });
//   };
//   handlePassword = text => {
//     this.setState({ password: text });
//   };
//   login = (email, pass) => {
//     alert(this.state.isdone);
//     info["state"].condition = "done";
//     this.state.isdone = "done";
//     alert("email: " + email + " password: " + this.state.isdone);
    
//   };
//   main= () => {
//     if (info['state'].condition === "") {
//       return (
//         <View style={styles.container}>
//           <TextInput
//             style={styles.input}
//             underlineColorAndroid="transparent"
//             placeholder="Email"
//             placeholderTextColor="#9a73ef"
//             autoCapitalize="none"
//             onChangeText={this.handleEmail}
//           />

//           <TextInput
//             style={styles.input}
//             underlineColorAndroid="transparent"
//             placeholder="Password"
//             placeholderTextColor="#9a73ef"
//             autoCapitalize="none"
//             onChangeText={this.handlePassword}
//           />

//           <TouchableOpacity
//             style={styles.submitButton}
//             onPress={() => this.login(this.state.email, this.state.password)}
//           >
//             <Text style={styles.submitButtonText}> Submit </Text>
//           </TouchableOpacity>
//         </View>
//       );
//     } else {
//       return <App />;
//     }
//   };

//   render(){
//     return(
//       <View style={{flex:1}}>
//         {this.main()}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 23
//   },
//   input: {
//     margin: 15,
//     height: 40,
//     borderColor: "#7a42f4",
//     borderWidth: 1
//   },
//   submitButton: {
//     backgroundColor: "#7a42f4",
//     padding: 10,
//     margin: 15,
//     height: 40
//   },
//   submitButtonText: {
//     color: "white"
//   }
// });

// export default Inputs;
