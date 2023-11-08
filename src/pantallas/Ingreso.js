import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { colores } from '../temas/colores';
import { firebase_auth } from '../firebase/autenticacion';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setIdToken } from '../redux/slice/autSlice';
import { setUser } from '../redux/slice/autSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Ingreso = ({ navigation }) => {

    dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const iniciarSecion = async () => {
        try {
            const response = await signInWithEmailAndPassword(firebase_auth, email, pass)
            AsyncStorage.setItem('mailUsuario', response.user.email)
            dispatch(setUser(response.user.email));
            dispatch(setIdToken(response._tokenResponse.idToken));
        } catch (error) {
            console.log('Error al iniciar seción ', error);
        }
    }
    
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Ingresar</Text>
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
            <Pressable onPress={()=> navigation.navigate('registro')}>
                <Text style={styles.texto}>
                    No tiene cuenta? Registrate!
                </Text>
            </Pressable>
            <Pressable style={styles.botonIngresar} onPress={()=> iniciarSecion()}>
                <Text style={styles.textoBoton}>Iniciar Seción</Text>
            </Pressable>
        </View>
    )
}

export default Ingreso

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
    input: {
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
    botonIngresar: {
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