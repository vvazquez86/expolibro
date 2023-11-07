import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RutasNavegacion from './RutasNavegacion';
import Perfil from '../pantallas/Perfil';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colores } from '../temas/colores';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={{ title: '', headerShown: false }}>
            <Tab.Screen            
                options={{
                    tabBarIcon: ({ focused }) => <Entypo name="book" size={30} color={focused ? colores.dorado : colores.oscuro}/>
                }}
                name='rutasNavegacion'
                component={RutasNavegacion}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => <FontAwesome name="user-circle-o" size={24} color={focused ? colores.dorado : colores.oscuro}/>
                }}
                name='perfil'
                component={Perfil} 
            />
        </Tab.Navigator>
    )
}

export default TabNav

const styles = StyleSheet.create({
    
})