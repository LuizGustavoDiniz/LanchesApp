import React, {useLayoutEffect} from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

export default function Product({route}) {

  const navigation = useNavigation()

  useLayoutEffect(() => {

    navigation.setOptions({
      title: route.params?.data.name,
    })

  }, [])

 return (
    <View style={styles.container}>
      <Image
       source={{uri: route.params?.data.image}}
       style={{width: '100%', height: 250, alignSelf: 'center'}}
      />
      <Text style={styles.productDescription}>Ingredientes: {route.params?.data.description}</Text>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
         <Text style={{fontSize: 20, color: '#141414', fontWeight: '700'}}>R$ 18,99</Text>
         {route.params?.data.promo 
         ? 
         <Text style={{textDecorationLine: 'line-through', fontSize: 14, marginLeft: 3, color: '#141414'}}>R$ 22,30</Text>
          :
          <Text style={{textDecorationLine: 'line-through', fontSize: 14, marginLeft: 3, color: '#141414'}}>-20%</Text>
         } 
      </View>
      <View style={{backgroundColor: '#25D366', width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10, alignSelf: 'center', marginTop: 15, borderRadius: 10}}>
         <FontAwesome name="whatsapp" color="#FFF" size={25}/>
        <Text style={{fontSize: 22, color: '#FFF', fontWeight: 'bold', marginLeft: 5}} onPress={() => {
          Linking.openURL('https://wa.me/5514988271924')
        }}>
          Faça o pedido aqui
        </Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  productTitle: {
     textAlign: 'center',
     fontSize: 23,
     fontWeight: 'bold',
     margin: 6,
     color: '#141414'
  },
  productDescription: {
    textAlign: 'center',
    fontSize: 19,
    width: 200,
    alignSelf: 'center',
    marginTop: 20
  }
})