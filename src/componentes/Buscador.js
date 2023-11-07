import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colores } from '../temas/colores'
import { AntDesign } from '@expo/vector-icons';

const Buscador = ({text, setText}) => {
    
    const borrarTexto = ()=> {
        setText(null);
    }

    return (
        <View style={styles.contenedor}>
            <TextInput
                onChangeText={(value) => setText(value)}
                value={text}
                style={styles.input}
                placeholder='Buscar un libro...'
            />
            <Pressable onPress={()=> borrarTexto()}>
                <AntDesign name="closecircleo" size={35} color={colores.celeste} />
            </Pressable>

        </View>
    )
}

export default Buscador

const styles = StyleSheet.create({
    contenedor: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    input: {
        width: '78%',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: colores.celeste,
        padding: 10,
        fontSize: 20,
        marginRight: 5,
    }
})