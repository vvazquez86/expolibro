import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from '../componentes/Header'
import Categorias from '../componentes/Categorias'
import { useGetProductosQuery } from '../servicios/expoApi'


const PantallaCategoria = ({ navigation }) => {

  const datos = useGetProductosQuery();
  console.log(JSON.stringify(datos, null, " "))

  return (
    <SafeAreaView style={styles.contenedor}>
      <Header titulo={'Categorias de libros'} navigation={navigation} />
      <Categorias navigation={navigation}/>
    </SafeAreaView>
  )
}

export default PantallaCategoria

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'white',
    height: '100%',
  },
})