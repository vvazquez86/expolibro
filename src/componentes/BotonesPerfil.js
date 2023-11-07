import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colores } from '../temas/colores'

const BotonesPerfil = ({ texto, onPress }) => {
    return (
        <View>
            <Pressable styles={style.contenedor}>
                <Text styles={style.texto}>
                    {texto}
                </Text>
            </Pressable>
        </View>
    )
}

export default BotonesPerfil

const styles = StyleSheet.create({
    contenedorBoton:{
        margin: 5,
        padding: 2,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: colores.verde,
        backgroundColor: colores.claro,
    },
    texto:{
        fontSize: 25,
        fontWeight: '600'
    }
})