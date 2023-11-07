import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native'
import React from 'react'
import { productos } from '../datos/productos'
import Header from '../componentes/Header'
import { colores } from '../temas/colores'

const DetalleProductos = ({navigation}) => {
    const productoEjemplo = productos[0];
    
    const alertaChiste = ()=>{
        Alert.alert('Nop', 'Aun no se puede comprar', [
            {
                text: 'Cerrar',
                style: 'cancel',
            }
        ])
    }

    const alertaCompra = ()=>{
        Alert.alert('Comprar', '¿Esta seguro de comprar este producto?', [
            {
                text: 'No',
                style: 'cancel',
            },
            {
                text: 'Si', onPress: ()=> alertaChiste()
            }
        ])
    }

    return (
        <ScrollView>
            <Header titulo={'Detalle del Libro'} />
            <Pressable onPress={()=> navigation.goBack()}>
                <Text>Ir atras...</Text>
            </Pressable>
            <View style={styles.contenedor}>

                <Image
                    style={styles.imagen}
                    source={{
                        uri: productoEjemplo.imagen,
                    }}
                />
                <Text style={styles.titulo}>{productoEjemplo.nombreReal}</Text>
            </View>
            <View style={styles.contenedorDetalles}>
                <Text style={styles.tituloDescripcion}>Descripcion:</Text>
                <Text>{productoEjemplo.sinopsis}</Text>
                <Text style={styles.tituloDescripcion}>Editorial: {productoEjemplo.editorial}</Text>
                <Text style={styles.tituloDescripcion}>Año de publicación: {productoEjemplo.fechaPublicación}</Text>
            </View>
            <Text style={styles.precio}>Precio: ${productoEjemplo.Precio}</Text>
            <View style={styles.contenedorComprar}>
                <Pressable onPress={()=> alertaCompra()} style={styles.botonComprar}>
                    <Text style={styles.textoComprar}>Comprar</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default DetalleProductos

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',
        marginTop: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 25,
    },
    imagen: {
        height: 250,
        width: 170,
    },
    contenedorDetalles: {
        marginHorizontal: 10,
        padding: 2,
    },
    tituloDescripcion: {
        fontWeight: '600',
        marginVertical: 2,
    },
    precio: {
        textAlign: 'center',
        fontSize: 25,
        marginVertical: 5,
    },
    textoComprar: {
        fontSize: 20,
        fontWeight: '600',
        color: colores.verde
    },
    botonComprar: {
        border: 1,
        borderRadius: 10,
        borderWidth: 2,
        width: '50%',
        padding: 5,
        alignItems: 'center',
        borderColor: colores.oscuro,
        backgroundColor: colores.claro,    
    },
    contenedorComprar:{
        alignItems: 'center',
        marginVertical: 10,
    }
})