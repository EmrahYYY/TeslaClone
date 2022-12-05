import React from "react";

import { View, FlatList, Dimensions } from "react-native";

import Caritem from "../Caritem";

import cars from "./items";
import styles from "./styles";

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <Caritem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarList;
