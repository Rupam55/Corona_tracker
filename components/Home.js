import React from "react";
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  Linking,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import * as Progress from "react-native-progress";
import ProgressCircle from "react-native-progress-circle";
import Icon from "react-native-vector-icons/FontAwesome";

import { info } from "../components/info";

const Home = ({ active, confirmed, deceased, recovered }) => {
  const add = () => {
    alert("location:" + info["state"].state + " " + info["state"].city);
  };
  const add1 = () => {
    alert('The percentage circle are made in a ratio out of 10, i.e. raw number divided 10.');
  };

  var prog= '';
  var text='';
  var color= '';
    if(active<10){
     prog=.1;
     color='#0bfc03';
     text='you are safe.'; 
    }else if(active>10&&active<50){
      prog=.3;
     color='#9dfc03';
     text='you are not in green zone city, cases have increased, make N-95 mask your bestfriend';
    }
    else if(active>50&&active<100){
      prog=.4;
     color='#ebfc03';
     text='you are in a yellow zone city, make precautions to defend yourself. ';
    }
    else if(active>100&&active<500){
      prog=.6;
     color='#fcca03';
     text='you are in a orange zone city, take extra precautions. Buy more toilet papers.';
    }
    else if(active>500&&active<10000){
      prog=.8;
     color='#fc6b03';
     text='you are in a red zone city, take absolute care. May the force be with you.';
    }else {
      prog=.95;
      color='#fc0303';
      text='you dead bro'
    }

  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Card}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Text>{info["state"].name}</Text>
            <Text>age: {info["state"].age}</Text>
          </View>
          <Image
            style={{ height: 50, width: 50, borderRadius: 50 }}
            source={require("../assets/boy.png")}
          />
        </View>

        <View
          style={{
            marginTop: "6%",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Progress.Bar
            progress={prog}
            width={300}
            color={color}
            borderRadius={20}
            height={15}
          />
          <Text style={{ marginTop: "3%" }}>{text}</Text>
        </View>

        <View
          style={{
            marginTop: "8%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              flex: 1
            }}
          >
            <ProgressCircle
              percent={confirmed / 10}
              radius={40}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#fff"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 18 }}>{confirmed}</Text>
            </ProgressCircle>
            <Text>Cases in your country</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              flex: 1
            }}
          >
            <ProgressCircle
              percent={active / 10}
              radius={40}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#fff"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 18 }}>{active}</Text>
            </ProgressCircle>
            <Text>Cases in your city</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: "8%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              flex: 1
            }}
          >
            <ProgressCircle
              percent={recovered / 10}
              radius={40}
              borderWidth={8}
              color="#44ff33"
              shadowColor="#fff"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 18 }}>{recovered}</Text>
            </ProgressCircle>
            <Text>Recovered people</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              flex: 1
            }}
          >
            <ProgressCircle
              percent={deceased / 10}
              radius={40}
              borderWidth={8}
              color="#ff4d00"
              shadowColor="#fff"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 18 }}>{deceased}</Text>
            </ProgressCircle>
            <Text>People dead</Text>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center', marginTop: 20}}>
          <TouchableOpacity
            style={{  }}
            onPress={add}>
            <Icon name="map-signs" size={25} color={"#3fc1c9"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft:'40%' }}
            onPress={add1}>
            <Icon name="info-circle" size={25} color={"#3fc1c9"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* second card */}

      <View style={styles.Card1}>
        <View style={{ flexDirection: "column" }}>
          <Image
            style={{
              height: 100,
              width: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}
            source={require("../assets/who.jpg")}
          />
          <Button
            title="WHO guidelines"
            onPress={() => Linking.openURL("https://www.who.int/")}
          />
        </View>
      </View>

      {/* third card */}

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <View
            style={{
              ...styles.Card,
              flexDirection: "column",
              alignItems: "center",
              marginRight: "1.5%",
              flex: 1
            }}
          >
            <Image
              style={{ height: 50, width: 50, borderRadius: 50 }}
              source={require("../assets/icon-infected.png")}
            />
            <Text style={{ marginTop: "6%", marginBottom: "6%" }}>
              Someone is sick
            </Text>
            <Button
              color="orange"
              title="Click here"
              onPress={() => Linking.openURL("")}
            />
          </View>
          <View
            style={{
              ...styles.Card,
              flexDirection: "column",
              alignItems: "center",
              marginLeft: "1.5%",
              flex: 1
            }}
          >
            <Image
              style={{ height: 50, width: 50, borderRadius: 50 }}
              source={require("../assets/boy.png")}
            />
            <Text style={{ marginTop: "6%", marginBottom: "6%" }}>
              If you are sick
            </Text>
            <Button
              color="orange"
              title="Click here"
              onPress={() => Linking.openURL("")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3%",
    backgroundColor:'#cfcfcf'
  },
  Card: {
    backgroundColor: "#fff",
    padding: "6%",
    marginBottom: "3%",
    borderRadius: 10
  },
  Card1: {
    backgroundColor: "#fff",
    marginBottom: "3%",
    borderRadius: 10
  }
});

export default Home;
