import React from 'react';
import { Image, Text, View } from 'react-native';

export default function MenuItem(props) {
 return (
   <View style={{backgroundColor: '#FFFAFA', marginBottom: 22, shadowColor: "#000", shadowOffset: { width: 0, height: 3,}, shadowOpacity: 0.27, shadowRadius: 4.65, elevation: 6}}>
    <View style={{flexDirection: 'row'}}>
        <Image
         source={{uri:props.data.image}}
         style={{width: 200, height: 140}}
        />
        <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{}}>X-salada</Text>
        </View>
    </View>
   </View>
  );
}