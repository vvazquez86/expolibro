import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colores } from '../temas/colores'
import { setCategoria } from '../redux/slice/storeSlice'
import { useDispatch } from 'react-redux'

const ItemsCategoria = ({ item, navigation }) => {
const dispatch = useDispatch();

  const onHandleItem = ()=>{
    dispatch(setCategoria(item))
    navigation.navigate('productos', { item: item });
  }

  return (
    <Pressable onPress={() => onHandleItem()}
      style={styles.contenedor}>
      <Text style={styles.text}>{item}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colores.claro,
    padding: 20,
    fontWeight: '900',
    color: colores.celeste,

    //Estilos Bordes
    borderColor: colores.verde,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
  },
  contenedor: {
    width: '100%',
    alignItems: 'center',
    flex: 1
  }
})

export default ItemsCategoria