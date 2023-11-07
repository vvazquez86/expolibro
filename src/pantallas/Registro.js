import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { colores } from '../temas/colores'
import { firebase_auth } from '../firebase/autenticacion'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Registro = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const crearUsuario = async ()=>{
        try {
            const response = await createUserWithEmailAndPassword(firebase_auth, email, pass)
            // console.log(response)
            navigation.navigate('ingreso')
        } catch (error) {
            console.log('Error al crear la cuenta ', error)
        }
    }


    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Registro</Text>
            <TextInput
                placeholder='Email'
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput 
                placeholder='Contraseña'
                secureTextEntry
                style={styles.input}
                value={pass}
                onChangeText={(text) => setPass(text)}
            />
            <Pressable onPress={()=> navigation.navigate('ingreso')}>
                <Text style={styles.texto}>
                    Ya tienes cuenta? Iniciar Sesión
                </Text>
            </Pressable>
            <Pressable style={styles.botonRegistro} onPress={()=> crearUsuario()}>
                <Text style={styles.textoBoton}>Crear usuario</Text>
            </Pressable>
        </View>
    )
}

export default Registro

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colores.claro,
    },
    titulo: {
        fontSize: 30,
        marginBottom: 50,
    },
    input:{
        width: "85%",
        height: 50,
        borderColor: colores.verde,
        borderWidth: 2,
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 20,
    },
    texto:{
        fontSize: 15,
        color: colores.celeste,
        fontWeight: '600'
    },
    botonRegistro: {
        marginTop: 50,
        borderColor: colores.verde,
        borderWidth: 2,
        padding: 12,
        paddingHorizontal: 75,
        backgroundColor: colores.oscuro,
        borderRadius: 5,
    },
    textoBoton:{
        fontSize: 15,
        fontWeight: '600',
        color: colores.celeste
    }

})