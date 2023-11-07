import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ingreso from '../pantallas/Ingreso'
import Registro from '../pantallas/Registro'

const Stack = createNativeStackNavigator()

const NavAutenticacion = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>        
        <Stack.Screen name="ingreso" component={Ingreso} />
        <Stack.Screen name="registro" component={Registro} />
    </Stack.Navigator>
  )
}

export default NavAutenticacion;

