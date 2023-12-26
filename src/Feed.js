
import React, { Component, useState } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react'
import {View,Text,Image,ImageBackground,TextInput,Modal, TouchableHighlight, Alert} from 'react-native'
import maxestilo from './Estilos'


export default function Feed({navigation}) {

    let [Menuzinho, setMenuzinho] = useState(false)
    let [Like, setLike] = useState('0')    

    const verificalike = () =>{
        if (Like == '1'){
            setLike('0')
        }
        else{
            setLike('1')
        }
    }

    const Confirmarsaida = () => {
        Alert.alert('Sair', 'Você deseja sair?',[{text: 'Cancelar'},
        {text: 'Sim', onPress: () => {setMenuzinho(false),navigation.navigate('Home')}}]) 
        
    }

    return<>

    <ImageBackground style={maxestilo.img3} source={require('../assets/telafeed2.png')}>

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

        {/* MENUZINHO */}
        <View style={maxestilo.vwmenuzinho}>
            <TouchableHighlight onPress={() => setMenuzinho(true)}>
                <Text style={{fontSize:25}}></Text>
            </TouchableHighlight>
        </View>

        {/* LIKE */}
        <View style={maxestilo.vwlike}>
            <TouchableHighlight onPress={verificalike}>
                <Text style={maxestilo.txtlike}></Text>
            </TouchableHighlight>
        </View>

        {/* CONT LIKE */}
        <View style={maxestilo.vwcontlike}>
            <Text style={maxestilo.txtcontlike}>{Like}</Text>
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

                        <View>
                            <TouchableHighlight>
                                <Text style={maxestilo.fontmenuzinho}>Academias</Text>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={maxestilo.vwsairdaconta}>
                        <TouchableHighlight onPress= {Confirmarsaida}>                        
                           <Text style={maxestilo.sairdaconta}>Sair da conta</Text>
                        </TouchableHighlight>
                        </View>

                </View>
            </Modal>
            
        </View>


    </ImageBackground>


    </>    
}