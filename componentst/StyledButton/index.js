import React from "react";

import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const type = props.type;

  const content = props.content;

  const onPress = props.onPress;


  




  console.warn(type);

  const brColor = type === "primary" ? "white" : "black";

  const textcolor = type === "primary" ? "black" : "white";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor:brColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text,{color:textcolor}]}> {content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
