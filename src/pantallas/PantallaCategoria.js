import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from '../componentes/Header'
import Categorias from '../componentes/Categorias'


const PantallaCategoria = ({ navigation }) => {
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