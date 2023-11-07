import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PantallaCategoria from '../pantallas/PantallaCategoria';
import Productos from '../pantallas/Productos';
import DetalleProductos from '../pantallas/DetalleProductos';


const Stack = createNativeStackNavigator();

const RutasNavegacion = () => {
    return (
        <Stack.Navigator
            initialRouteName='pantallaCategorias'
            screenOptions={{headerShown: false,
            }}
               
        >
            <Stack.Screen component={PantallaCategoria} name='Categorias de libros' />
            <Stack.Screen component={Productos} name='productos' />
            <Stack.Screen component={DetalleProductos} name='detalleProductos' />
        </Stack.Navigator>
    )
}

export default RutasNavegacion

const styles = StyleSheet.create({
    
})