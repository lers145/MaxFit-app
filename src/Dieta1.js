import React, { Component, useState } from 'react'
import {View,Text,Image,ImageBackground,TextInput,Modal, TouchableHighlight, Alert} from 'react-native'
import maxestilo from './Estilos'


export default function Perfil({navigation}) {
    return<>
        <ImageBackground style={maxestilo.img3} source={require('../assets/dieta1.png')}>
        <View><Text></Text></View>
        
        {/* FEED */}
        <View style={maxestilo.vwmenufeed}>
                <TouchableHighlight onPress={()=> navigation.navigate('Feed')}>
                    <Text style={{fontSize:25}}></Text>
                </TouchableHighlight>
            </View>

        {/* CHAT */}
         <View style={maxestilo.vwchat}>
             <TouchableHighlight onPress={() => navigation.navigate('Chat')}>
                 <Text style={{fontSize:25}}></Text>
             </TouchableHighlight>
        </View>   

        {/* PERFIL */}
        <View style={maxestilo.vwperfil}>
            <TouchableHighlight  style={maxestilo.bordaperfil} onPress= {() => navigation.navigate('Perfil')} >
                <Text></Text>
            </TouchableHighlight>
        </View>

        <View style={maxestilo.vwvoltardieta1}>
            <TouchableHighlight onPress={() => navigation.navigate('Dieta')}>
                <Text style={maxestilo.txtvoltardieta1}></Text>
            </TouchableHighlight>        
        </View>

        



        </ImageBackground>
    
    </>
}