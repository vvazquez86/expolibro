import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
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

