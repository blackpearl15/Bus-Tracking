import React from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase";

export default function SendLoc(userLoc) {

  fetch(
    "https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app/BusLoc.json",
    {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoc),
    }
  );

  return <View>{console.log(userLoc)}</View>;
}
