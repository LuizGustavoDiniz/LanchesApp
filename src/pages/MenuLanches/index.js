import React, {useLayoutEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuItem from '../../components/MenuItem';

let lanches = [
  {key: 1, name: 'X-salada', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 2, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela',  image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 3, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 4, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
  {key: 5, name: 'X-tudo', description: 'pão, alface, tomate, maionese e ketchup, hamburguer 120gr, queijo mussarela', image: "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg", promo: true},
]

export default function MenuLanches() {

  const navigation = useNavigation();

  useLayoutEffect(() => {

    navigation.setOptions({
      title: 'Cardápio de lanches'
    })

  }, [navigation])

 return (
   <View>
     <FlatList
      data={lanches}
      keyExtractor={item => String(item.key)}
      renderItem={({item}) => (<MenuItem data={item}/>)}
     />
   </View>
  );
}