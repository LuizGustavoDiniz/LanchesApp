import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PromoCard from '../../components/PromoCard';

let lanches = [
  {key: 1, name: 'X-salada', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 2, name: 'X-tudo', description: '2 X-burguer',  image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 3, name: 'X-tudo', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 4, name: 'X-tudo', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 5, name: 'X-tudo', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
]

let bebidas = [
  {key: 1, name: 'coca', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 2, name: 'suco', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 3, name: 'guarana', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 4, name: 'cerveja', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 5, name: 'pepsi', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
]

let doces = [
  {key: 1, name: 'pizza doce de leite', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 2, name: 'pizza brigadeiro', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 3, name: 'pizza morango', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 4, name: 'pizza morango', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 5, name: 'pizza morango', description: '2 X-burguer', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
]

export default function Home() {

  const [user, setUser] = useState('');

  const navigation = useNavigation()


  const getMenuLanches = () => {
    navigation.navigate('menulanches')
  }

 return (
    <ScrollView style={[styles.container]}>
    <View>
      <View>
          <Text>Lanches NERD</Text>
      </View>
      <View>
          <Text style={{fontSize: 22, color: '#141414', marginTop: 15}}>Promoções</Text>
      </View>
      <View>
          <ScrollView horizontal={true}>

            {
              lanches.map((item, index) => (<PromoCard key={index} data={item}/>))
            }
                      
          </ScrollView>
      </View>

      <Text style={styles.menuTitle}>COMBOS FAMÍLIA</Text>

      <View>
          <ScrollView horizontal={true}>

          {
              bebidas.map((item, index) => (<PromoCard key={index} data={item}/>))
            }     
          </ScrollView>

          <TouchableOpacity style={{backgroundColor: '#FFBC0C', width: 250, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 8}} onPress={getMenuLanches}>
            <Text style={{fontSize: 15}}>Veja o cardápio de Lanches</Text>
          </TouchableOpacity>
      </View>

      <Text style={styles.menuTitle}>PROMO BEBIDAS</Text>

      <View>
          <ScrollView horizontal={true}>

          {
              bebidas.map((item, index) => (<PromoCard key={index} data={item}/>))
            }     
          </ScrollView>

          <TouchableOpacity style={{backgroundColor: '#FFBC0C', width: 250, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 8}} onPress={getMenuLanches}>
            <Text style={{fontSize: 15}}>Veja as Bebidas</Text>
          </TouchableOpacity>
      </View>


      <Text style={styles.menuTitle}>PROMO DOCES</Text>

      <View>
          <ScrollView horizontal={true}>

          {
              doces.map((item, index) => (<PromoCard key={index} data={item}/>))
            }

      
    </ScrollView>

    <TouchableOpacity style={{backgroundColor: '#FFBC0C', width: 250, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
       <Text style={{fontSize: 15}}>Veja o cardápio de Doces</Text>
    </TouchableOpacity>
</View>
    </View>
    
</ScrollView>

  );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5F5F5',
      flex: 1
    },
    promoList: {
      flexDirection: 'column'
    },
    menuTitle: {
      fontSize: 28,
      color: '#141414',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 15
    },
    menuArea: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: 20
    },
    menuText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#141414',
    }
});