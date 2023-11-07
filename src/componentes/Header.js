import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { colores } from '../temas/colores'

const Header = ( {titulo, navigation} ) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        height: 85,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colores.claro,
        marginTop: 40,
    },
    titulo: {
        fontSize: 25,
        marginVertical: 10,
        fontWeight: '600',
        color: colores.verde
    }
})

export default Header