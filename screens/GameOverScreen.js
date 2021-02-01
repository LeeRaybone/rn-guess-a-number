import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import DefaultStyles from "../constants/default-styles";
import Colours from "../constants/colours.js";
import MainButton from "../components/MainButton"

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.titleText}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
          //source={{
          //  uri:
          //    "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
          //}}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={{...styles.resultText,...DefaultStyles.bodyText}}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{props.roundsNumber} </Text>rounds
          to guess the number
          <Text style={styles.highlightText}>{props.userNumber}</Text>
        </Text>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginBottom: 20,
  },
  resultText: {
    textAlign: "center",
  },
  highlightText: {
    color: Colours.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
