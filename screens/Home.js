import React from 'react'
import { StyleSheet, Text, View,Button} from "react-native";
import MapView, { PROVIDER_GOOGLE,Marker }  from 'react-native-maps';
import { Icon } from 'react-native-elements';



export default function Home() {
    return (
      <View style={styles.container}>
         <MapView style={styles.map}
          initialRegion={{
            latitude: 12.9022,
            longitude: 77.5186,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={{ latitude:12.9022, longitude: 77.5186}} />
        </MapView>
      <View style = {{marginVertical:550,marginLeft:290}}>
     
          <Icon
            raised
            name='google'
            
            type='font-awesome'
            color='#f50'
            onPress={() => alert("GPS Under Construction !!")} />
      </View>

      </View>
    )
}


const styles = StyleSheet.create({
    container: {
       ...StyleSheet.absoluteFillObject,

    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    
   
   });
