import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import ItemsCategoria from './ItemsCategoria'
import { useGetCategoriasQuery } from '../servicios/expoApi'
import { colores } from '../temas/colores'


const Categorias = ({ navigation }) => {

    const { data: categorias, isLoading } = useGetCategoriasQuery();
    
    return (
        <View style={styles.contenedor}>
            {isLoading ? (
                <ActivityIndicator size="large" color={colores.verde}/>
            ) : 
            <FlatList style={styles.lista}
                data={categorias}
                keyExtractor={(key) => key}
                renderItem={({ item }) => (
                    <ItemsCategoria navigation={navigation} item={item} />
                )}
            />
            }            
        </View>
    )
}

export default Categorias

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',
        marginTop: 20,
    },
    lista: {
        width: '70%'
    }
})