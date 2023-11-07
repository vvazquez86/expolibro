import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'
import Buscador from '../componentes/Buscador'
import Header from '../componentes/Header'
import ItemsProductos from '../componentes/ItemsProductos'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetProductosQuery } from '../servicios/expoApi'
import { colores } from '../temas/colores'

const Productos = ({ route, navigation }) => {

    const [prodCategoria, setprodCategoria] = useState([])
    const [text, setText] = useState('')
    const { item } = route.params;

    const { data: productos, isLoading} = useGetProductosQuery()
    const productosFiltrados = useSelector(
        (state) => state.storeSlice.productosFiltrados
    )
    

    useEffect(() => {
        setprodCategoria(productosFiltrados);
        if (text) {
            const nombreProducto = productos.filter(
                (e) => e.nombre.toLowerCase() === text.toLowerCase()
            );
            setprodCategoria(nombreProducto);
        }
    }, [text, item])


    return (
        <SafeAreaView style={styles.contenedor}>
            <Header titulo={item} />
            {isLoading ? (
                <ActivityIndicator style={styles.spiner} size="large" color={colores.verde} />
            ) :
                <>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text>Ir atras...</Text>
                    </Pressable>
                    <Buscador text={text} setText={setText} />
                    <FlatList
                        data={prodCategoria}
                        keyExtractor={productos.id}
                        renderItem={({ item }) => <ItemsProductos navigation={navigation} item={item} />}
                    />
                </>
            }
        </SafeAreaView>
    )
}

export default Productos

const styles = StyleSheet.create({
    
    contenedor:{
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    
    spiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})