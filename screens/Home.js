import React from 'react'
import { StyleSheet, Text, View,Button} from "react-native";
import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps';

export default function Home() {
    return (
      <View style={styles.container}>
         <MapView style={styles.map}
    initialRegion={{
      latitude: 12.971599,
      longitude: 77.594566,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    />
     <View>
        <Button title="Go Somewhere"/>
     </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
       ...StyleSheet.absoluteFillObject,
      height: 725,
      width: 500,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   
   });
