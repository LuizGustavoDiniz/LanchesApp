import React from 'react';
import {View, Text, Image} from 'react-native'

export default function Product({route}) {

 return (
    <View>
      <Text>{route.params?.data.name}</Text>
      <Text>{route.params?.data.description}</Text>
      <Image
       source={{uri: route.params?.data.image}}
       style={{width: 250, height: 250}}
      />
    </View>
  );
}