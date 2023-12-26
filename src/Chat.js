import React, { Component, useState } from 'react'
import {View,Text,Image,ImageBackground,TextInput,Modal, TouchableHighlight, Alert} from 'react-native'
import maxestilo from './Estilos'


export default function Perfil({navigation}) {

    let [Menuzinho, setMenuzinho] = useState(false)

    return<>
        <ImageBackground style={maxestilo.img3} source={require('../assets/mensagens.png')}>

            <View><Text></Text></View>

            {/* FEED */}
         <View>
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

            {/* MENUZINHO */}
                <View style={maxestilo.vwmenuzinho}>
            <TouchableHighlight onPress={() => setMenuzinho(true)}>
                <Text style={{fontSize:25}}></Text>
            </TouchableHighlight>
        </View>

            {/* MODAL MENUZINHO */}
                <View>
            <Modal visible={Menuzinho} transparent= {true} animationType= 'fade'>

                <View style={maxestilo.vwvoltarmenuzinho}>
                <TouchableHighlight onPress={() => setMenuzinho(false)}>
                    <Text style={{fontSize:25}}></Text>
                </TouchableHighlight>
                </View>

                <View style={maxestilo.vwmenuzinho1}> 
                    
                        <TouchableHighlight onPress={() => {setMenuzinho(false), navigation.navigate('Dieta')}}>                        
                           <Text style={maxestilo.fontmenuzinho}>🥦 Dieta</Text>
                        </TouchableHighlight>
                        <View style={maxestilo.vwsairdaconta}>
                        <TouchableHighlight onPress= {() => {setMenuzinho(false), navigation.navigate('Home')}}>                        
                           <Text style={maxestilo.sairdaconta}>Sair da conta</Text>
                        </TouchableHighlight>
                        </View>

                </View>
            </Modal>
            
        </View>


        </View>   
        </ImageBackground>
    
    </>
}