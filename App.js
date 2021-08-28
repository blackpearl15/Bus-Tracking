// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Button} from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Home/>
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App  () {
  console.log("App executed");

  return (

         <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Add Bus" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={HomeScreen} />
            <Drawer.Screen name="Setting" component={HomeScreen} />
          </Drawer.Navigator>
    </NavigationContainer>


   
  );
}
