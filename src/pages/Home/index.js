import React, {useState, useLayoutEffect} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PromoCard from '../../components/PromoCard';

let promos = [
  {key: 1, name: 'X-salada', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 2, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela',  image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 3, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 4, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 5, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
]

let lanches = [
  {key: 1, name: 'X-salada', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 2, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela',  image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 3, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 4, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 5, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
]

let bebidas = [
  {key: 1, name: 'coca', description: 'suco natural da fruta, 120gr de laranja com açucar e gelo á gosto', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 2, name: 'suco', description: 'suco natural da fruta, 120gr de laranja com açucar e gelo á gosto', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 3, name: 'guarana', description: 'suco natural da fruta, 120gr de laranja com açucar e gelo á gosto', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 4, name: 'cerveja', description: 'suco natural da fruta, 120gr de laranja com açucar e gelo á gosto', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 5, name: 'pepsi', description: 'suco natural da fruta, 120gr de laranja com açucar e gelo á gosto', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
]

let doces = [
  {key: 1, name: 'pizza doce de leite', description: 'chocolate meio amargo junto a nutella, confetes, fatias de morango e leite condensado em cima', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 2, name: 'pizza brigadeiro', description: 'chocolate meio amargo junto a nutella, confetes, fatias de morango e leite condensado em cima', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 3, name: 'pizza morango', description: 'chocolate meio amargo junto a nutella, confetes, fatias de morango e leite condensado em cima', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 4, name: 'pizza morango', description: 'chocolate meio amargo junto a nutella, confetes, fatias de morango e leite condensado em cima', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
  {key: 5, name: 'pizza morango', description: 'chocolate meio amargo junto a nutella, confetes, fatias de morango e leite condensado em cima', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg"},
]

export default function Home() {

  const [user, setUser] = useState('');

  const navigation = useNavigation()


  const getMenuLanches = () => {
    navigation.navigate('menulanches')
  }

  useLayoutEffect(() => {

    navigation.setOptions({
      title: "Lanches NERD"
    })

  }, [navigation])

 return (
    <ScrollView style={[styles.container]}>
    <View>
      <View>
          <Text style={{fontSize: 22, color: '#141414', marginTop: 15, textAlign:'center', fontSize: 28}}>Promoções</Text>
      </View>
      <View>
          <ScrollView horizontal={true}>

            {
              promos.map((item, index) => (<PromoCard key={index} data={item}/>))
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

          <TouchableOpacity style={{backgroundColor: '#FFBC0C', width: 250, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 8, alignSelf: 'center', margin: 10}} onPress={getMenuLanches}>
            <Text style={{fontSize: 15, color: '#141414'}}>Veja o cardápio de Lanches</Text>
          </TouchableOpacity>
      </View>

      <Text style={styles.menuTitle}>PROMO BEBIDAS</Text>

      <View>
          <ScrollView horizontal={true}>

          {
              bebidas.map((item, index) => (<PromoCard key={index} data={item}/>))
            }     
          </ScrollView>

          <TouchableOpacity style={{backgroundColor: '#FFBC0C', width: 250, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 8, alignSelf: 'center', margin: 10}} onPress={getMenuLanches}>
            <Text style={{fontSize: 15, color: '#141414'}}>Veja as Bebidas</Text>
          </TouchableOpacity>
      </View>


      <Text style={styles.menuTitle}>PROMO DOCES</Text>

      <View>
          <ScrollView horizontal={true}>

          {
              doces.map((item, index) => (<PromoCard key={index} data={item}/>))
            }
        </ScrollView>

    <TouchableOpacity style={{backgroundColor: '#FFBC0C', width: 250, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 8, alignSelf: 'center', margin: 10}}>
       <Text style={{fontSize: 15, color: '#141414'}}>Veja o cardápio de Doces</Text>
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
      fontSize: 22,
      color: '#141414',
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
      fontSize: 22,
      color: '#141414',
    }
});