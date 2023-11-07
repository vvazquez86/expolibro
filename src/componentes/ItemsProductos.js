import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colores } from '../temas/colores'

const ItemsProductos = ({ item, navigation }) => {
  
  return (
    
    <Pressable onPress={()=> navigation.navigate('detalleProductos')}>
      <View style={styles.contenedor}>
        <Text style={styles.texto}> {item.nombre} </Text>
        <Image
          style={styles.img}
          height={80}
          width={60}
          source={{ uri: item.imagen }} />
      </View>
    </Pressable>
    
  )
}

export default ItemsProductos

const styles = StyleSheet.create({
  contenedor: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: colores.claro,
    borderColor: colores.oscuro,
    borderRadius: 10,
    borderWidth: 1,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  texto: {
    fontSize: 15,
    fontWeight: '900',
    marginLeft: 20,
    color: colores.celeste,
  },
  img: {
    marginRight: 10,
    borderWidth: 2,
    borderColor: colores.oscuro,
    borderRadius: 5,
  }
})