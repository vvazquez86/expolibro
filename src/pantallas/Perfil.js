import { StyleSheet, Text, View, Image, Pressable, RootTagContext, Alert } from 'react-native'
import React from 'react'
import Header from '../componentes/Header'
import { colores } from '../temas/colores'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { usePutImagenMutation } from '../servicios/expoApi';
import { useGetImagenQuery } from '../servicios/expoApi';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/autSlice';


const Perfil = ({ navigation }) => {

    const [putImagen, result] = usePutImagenMutation();

    const { data, refetch } = useGetImagenQuery();

    const dispatch = useDispatch();

    const imagenStandar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYqXjw6IR_opev4UADLjT8TPcLmWYQsx_YQ&usqp=CAU'

    const buscarFoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            base64: true,
        });

        if (!result.canceled) {
            await putImagen({
                image: `data:image/jpeg;base64,${result.assets[0].base64}`,
            });
            refetch();
        }
    };

    const cerrarSesion = async () =>{
        try {
            dispatch(clearUser());
            await AsyncStorage.removeItem('mailUsuario');
            navigation.navigate('rutasNavegacion');
        } catch (e) {
            console.log('error al cerrar la sesion: ', e)
        }
    }

    const alertaDeCierre = ()=>{
        Alert.alert('Cerrar sesion', '¿Estas seguro de cerrar la sesión?', [
            {
                text: 'No',
                style: 'cancel',
            },
            {
                text: 'Si', onPress: ()=> cerrarSesion()
            }
        ])
    }

    const abrirCamara = async () => {
        const permisoCamara = await ImagePicker.requestCameraPermissionsAsync();

        if (permisoCamara.granted === false) {
            alert('No diste permiso para abrir la camara');
            return;
        } else {
            const result = await ImagePicker.launchCameraAsync({
                base64: true,
            });

            // console.log('Esto es lo que paso', result)

            if (!result.canceled) {
                await putImagen({
                    image: `data:image/jpeg;base64,${result.assets[0].base64}`,
                });
                refetch();
            }
        }
        // console.log(data)
    }

    return (
        <View>
            <Header titulo={'Mi perfil'} />
            <View style={styles.contenedor}>
                <Image
                    style={styles.image}
                    source={{
                        uri: data ? data.image : imagenStandar
                    }}
                />
            </View>
            <View style={styles.contenedor}>
                <View style={styles.contenedorBoton}>
                    <Pressable onPress={() => buscarFoto()} style={styles.pressable}>
                        <Text style={styles.texto}>
                            <AntDesign name="picture" size={24} color="black" />
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => abrirCamara()} style={styles.pressable}>
                        <Text style={styles.texto}>
                            <SimpleLineIcons name="camera" size={24} color="black" />
                        </Text>
                    </Pressable>
                </View>
                <Pressable 
                    style={styles.salir}
                    onPress={alertaDeCierre}
                >
                    <Ionicons name="ios-log-out-outline" size={35} color='black' />
                </Pressable>
            </View>
        </View>
    )
}

export default Perfil

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: colores.verde
    },
    pressable: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colores.verde,
        backgroundColor: colores.claro,
        width: '20%',
    },
    texto: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center'
    },
    contenedorBoton: {
        flexDirection: 'row'
    },
    salir:{
        borderColor: colores.verde,
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 50,
        padding: 10,
        paddingHorizontal: 50,
        backgroundColor: colores.oscuro
    }
})