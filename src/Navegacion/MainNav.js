import { NavigationContainer } from '@react-navigation/native';
import NavAutenticacion from './NavAutenticacion';
import TabNav from './TabNav';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useState } from 'react';

const MainNav = () => { 
    const [chequearUsuario, setchequearUsuario] = useState(null);   
    const user = useSelector((state) => state.autSlice.user);

    useEffect(()=> {
        const checkUser = async () => {
            try {
                const mailUsuario = await AsyncStorage.getItem('mailUsuario');
                mailUsuario ? setchequearUsuario(mailUsuario) : setchequearUsuario(user)
            } catch (e) {
                console.log('Ocurrio un error: ', e)
            }
        };
        checkUser();
    }, [user]);

    return <NavigationContainer>{chequearUsuario ? <TabNav /> : <NavAutenticacion />}</NavigationContainer>
}

export default MainNav