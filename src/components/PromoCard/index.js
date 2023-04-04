import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function PromoCard(props) {

  const navigation = useNavigation()

  const getProduct = () => {
    navigation.navigate('product', {data: props.data})
  }

 return (
    <View style={styles.promoItemArea}>
        <View style={styles.promoTitle}>
              <Text style={[styles.promoItemText]}>{props.data.name}</Text>
        </View>
        
        <View>
              <View style={styles.promoDiscount}>
                <Text style={styles.discountText}>-20%</Text>
              </View>
              <Image
                source={{uri: props.data.image}}
                style={styles.promoPhotos}
                />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
             <Text style={{fontSize: 17, textAlign: 'center', fontWeight: 'bold', color: '#141414'}}>R$ 18,99</Text>
             <Text style={{fontSize: 14, marginLeft: 5, color: '#141414', textDecorationLine: 'line-through'}}>R$ 22,30</Text>
        </View>

        

        <View>
            <TouchableOpacity style={styles.promoItemBtn} onPress={getProduct} >
               <Text>Ver mais</Text>
            </TouchableOpacity>  
        </View>
       
  </View>
  );
}

const styles = StyleSheet.create({
  promoItemArea: {
    backgroundColor: '#FFFAFA',
    margin: 10,
    width: 250,      
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 3,
     },
     shadowOpacity: 0.27,
     shadowRadius: 4.65,

  elevation: 6
  },
  promoTitle: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: 10
  },
  promoItemText: {
    fontSize: 20,
    color: '#141414', 
    fontWeight: 'bold'
  },
  promoDescription: { 
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 10,
    marginBottom: 25
  },
  promoDiscount: {
    backgroundColor: '#DB0006', 
    alignSelf: 'flex-end', 
    width: 70, height: 70, 
    borderRadius: 50, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: -90, 
    marginRight: 40, zIndex: 10
  },
  discountText: {
    marginLeft: 8, 
    fontSize: 20, 
    fontStyle: 'italic', 
    fontWeight: 'bold', 
    color: '#FFF'
  },
  promoPhotos: {
    width: 150,
    height: 150,
    margin: 9,
    borderRadius: 80,
    alignSelf: 'center'
 },
 promoItemBtn: {
  backgroundColor: '#FFBC0C',
  width: 100,
  height: 40,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 8,
  borderRadius: 10
},
})