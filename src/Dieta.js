import React, { Component, useState } from 'react'
import {View,Text,Image,ImageBackground,TextInput,Modal, TouchableHighlight, Alert} from 'react-native'
import maxestilo from './Estilos'


export default function Perfil({navigation}) {
    return<>
    <ImageBackground style={maxestilo.img3} source={require('../assets/dieta.png')}>       

        <View><Text></Text></View>

        {/* FEED */}
    <View style={maxestilo.vwmenufeed}>
                <TouchableHighlight onPress={()=> navigation.navigate('Feed')}>
                    <Text style={{fontSize:25}}></Text>
                </TouchableHighlight>
            </View>

        {/* CHAT */}
         <View style={maxestilo.vwchat}>
             <TouchableHighlight onPress={() => navigation.navigate('Feed')}>
                 <Text style={{fontSize:25}}></Text>
             </TouchableHighlight>
        </View>   

        {/* PERFIL */}
        <View style={maxestilo.vwperfil}>
            <TouchableHighlight  style={maxestilo.bordaperfil} onPress= {() => navigation.navigate('Perfil')} >
                <Text></Text>
            </TouchableHighlight>
        </View>

        {/* MENUZINHO */}
        <View style={maxestilo.vwmenuzinho}>
            <TouchableHighlight onPress={() => setMenuzinho(true)}>
                <Text style={{fontSize:25}}></Text>
            </TouchableHighlight>
        </View>

        {/* VOLTAR */}
        <View style={maxestilo.vwvoltardieta}>
            <TouchableHighlight onPress={() => navigation.navigate('Feed')}>
                <Text style={{fontSize:22}}></Text>
            </TouchableHighlight>
        </View>

        {/* DIETA1 */}
        <View style= {maxestilo.vwdieta}>
            <TouchableHighlight style={{borderRadius:10}} onPress={() => navigation.navigate('Dieta1')}>
                <Text style={maxestilo.dieta1}></Text>
            </TouchableHighlight>
        </View>

    </ImageBackground>

    
    </>
}