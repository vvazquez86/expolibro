import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colores } from './src/temas/colores';
import Header from './src/componentes/Header';
import Categorias from './src/componentes/Categorias';
import PantallaCategoria from './src/pantallas/PantallaCategoria';
import Buscador from './src/componentes/Buscador';
import Productos from './src/pantallas/Productos';
import { useFonts } from 'expo-font';
import DetalleProductos from './src/pantallas/DetalleProductos';
import { NavigationContainer } from '@react-navigation/native';
import RutasNavegacion from './src/Navegacion/RutasNavegacion';
import TabNav from './src/Navegacion/TabNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Registro from './src/pantallas/Registro';
import NavAutenticacion from './src/Navegacion/NavAutenticacion';
import MainNav from './src/Navegacion/MainNav';


export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu: require("./assets/Fonts/Ubuntu-Regular.ttf"),
  })
  return (

    <Provider store={store}>
      <MainNav />
    </Provider>
  );

}

