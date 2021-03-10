import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Touchable } from 'react-native'

import {useDispatch, useSelector} from 'react-redux'
import { addCounter, subCounter} from './action'



const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(data => data.counter);
    const price = 250;
    return (
        <View >
            <View style={styles.container}>
                <Image style={styles.keranjang} source={require('../assets/keranjang.jpg') } />
                <View style={styles.total}>
                    <Text style={{fontSize:30,fontWeight:'700', color:'white'}} >{counter}</Text>
                </View>
            </View>
            <View style={styles.wrapItem}> 
                <Image style={styles.lipstik} source={require('../assets/lipstik.jpg')} />
                <View style={styles.wrapLipstik}>
                    <Text style={{fontWeight:'bold', fontSize:20, marginBottom: 15,}} >LIPSTIK MAYBELLINE</Text>
                    <Text>Price : ${price}</Text>
                </View>
                <View style={styles.ammount}>
                    <TouchableOpacity style={{backgroundColor:'#cce7e8'}}
                    onPress={()=>dispatch(addCounter(counter))}>
                    <Text style={styles.value}>+</Text>

                    </TouchableOpacity>
                    <Text style={styles.value}>{counter}</Text>
                    <TouchableOpacity style={{backgroundColor:'#cce7e8'}}
                    onPress={()=>dispatch(subCounter(counter))}>

                    <Text style={styles.value}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={styles.summarize}>
                    <Text style={{flex:1, fontSize:20, fontWeight:'bold'}}>Total : </Text>
                    <Text style={{flex:1, fontSize:20, fontWeight:'bold'}}>$ {counter * price}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    keranjang: {
        width:200,
        height:200
    },
    total: {
        position: 'absolute',
        top:30,
        left:240,
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lipstik: {
        width:100,
        height:100
    },
    wrapItem: {
        flexDirection: 'row',
        marginLeft:20,
    },
    ammount: {
        flex:1,
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'center'
    },
    value: {
        fontSize:20,
        fontWeight:'600',
        padding:8,
        alignItems:'center',
        justifyContent:'center'
    },
    summarize: {
        marginTop:100,
        marginLeft:20,
        flex: 1,
        flexDirection: 'row',
        alignContent:'space-between'
    },
    wrapLipstik: {
        marginLeft:10
    }

})

export default Counter