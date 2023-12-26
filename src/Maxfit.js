
import React, { Component, useState } from 'react'
import {View,Text,Image,ImageBackground,TextInput,Modal, TouchableHighlight,Alert} from 'react-native'
import maxestilo from './Estilos'



 
export default function MaxFitness({navigation}){

    let [cadastro,setcadastro] = useState(false)        
    let [cadastro2,setcadastro2] = useState(false)   
    let [Senha, setSenha]  = useState(false)
    let [Tipodeconta,setTipodeconta] = useState(false)

    let [User, setUser] = useState() 
    let [Usersenha, setUsersenha] = useState()
    let [Nmusuario, setNmusuario] = useState()
    let [Nmsenha, setNmsenha] = useState()

    
        const verifica = () => {
            if (User != Nmusuario){
                setTipodeconta(true)
               
            }
            else{                
                setSenha(true)
            }           
        } 

        const verificasenha = () =>{
            if (Usersenha != Nmsenha){
                Alert.alert('Erro','Senha incorreta!')
            }
            else{
                setSenha(false)
                navigation.navigate('Feed')
            }
        }

        
        return(
            <View>
                <ImageBackground style= {maxestilo.img} source={require('../assets/tela1.png')}>     

                    {/* BOTAO CRIAR CONTA */}
                    <View style= {maxestilo.vwcriarconta}>
                        <TouchableHighlight  onPress = {() => setTipodeconta(true)}>
                        <Text style = {maxestilo.botaocriarconta}> Criar Conta </Text>
                        </TouchableHighlight>                              
                    </View> 

                    {/* TEXTINPUT INICIO */}
                    <View style= {maxestilo.vwtelefone}>
                        <TextInput style= {maxestilo.telefone} placeholder= 'Usuário' onChangeText={x => (setUser(x))}></TextInput>
                    </View>


                    {/* BOTAO ENTRAR */}
                    <View style={maxestilo.vwentrar}>
                        <TouchableHighlight  onPress = {verifica} >
                            <Text style={maxestilo.botaoentrar}>Entrar</Text>
                        </TouchableHighlight>
                    </View>                                  
                </ImageBackground>

                {/* MODAL CADASTRO */}
                <Modal visible = {cadastro} animationType= 'slide'>                    
                    <ImageBackground style = {maxestilo.img2} source={require('../assets/telacadastro.png')}>

                        <View style={maxestilo.vwvoltar}>
                            <TouchableHighlight onPress={()=> setcadastro(false)}>
                                <Text style={maxestilo.voltar}></Text>
                            </TouchableHighlight>
                        </View>
                        
                        <View style = {maxestilo.cadastro}>                            
                            <TextInput style={maxestilo.nomecadastro} placeholder = 'Nome' ></TextInput> 
                            <TextInput style={maxestilo.telcadastro} placeholder = 'Telefone'  keyboardType = 'numeric'></TextInput>  
                            <View style={maxestilo.vwavancar}>
                                <TouchableHighlight onPress = {()=> setcadastro2(true)}>
                                    <Text style={maxestilo.botaoavancar}>Avançar</Text>
                                </TouchableHighlight> 
                            </View>   
                        </View>                            
                    </ImageBackground>
                </Modal>
                
                {/* MODAL CADASTRO2 */}
                <Modal visible= {cadastro2} animationType= 'slide'>
                    <ImageBackground style={maxestilo.img2} source= {require('../assets/telacadastro2.png')}>

                        <View style={maxestilo.vwvoltar}>
                            <TouchableHighlight onPress= {() => setcadastro2(false)}>
                                <Text style={maxestilo.voltar}> </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={maxestilo.vwusuario}>
                            <TextInput style={maxestilo.usuario} placeholder= 'Usuário' onChangeText={x=> (setNmusuario(x))}/>
                        </View>

                        <View style={maxestilo.vwsenha}>
                            <TextInput style={maxestilo.senha} placeholder= 'Senha' secureTextEntry = {true} onChangeText={x=> (setNmsenha(x))}/>
                        </View>

                        <View style = {maxestilo.vwdata}>                            
                            <TextInput style={maxestilo.data} placeholder= 'Data de nascimento' keyboardType = 'numeric' />
                        </View>

                        <View style={maxestilo.vwconcluir}>
                            <TouchableHighlight onPress = {() => {setcadastro2(false),setcadastro(false),setTipodeconta(false)}}>
                                <Text style= {maxestilo.botaoconcluir}>Concluir</Text>                          
                            </TouchableHighlight>
                        </View>
                    </ImageBackground>
                    
                </Modal>

                {/* MODAL SENHA */}

                <Modal visible= {Senha}>
                <ImageBackground style= {maxestilo.img} source={require('../assets/senha.png')}>  

                        <View style={maxestilo.vwvoltarsenha}>
                            <TouchableHighlight onPress= {() => setSenha(false)}>
                                <Text style={maxestilo.voltarsenha}>    </Text>
                            </TouchableHighlight>
                        </View> 

                        <View style={maxestilo.vwsenha2}>
                            <TextInput style={{fontSize:30}} placeholder= 'Senha' secureTextEntry = {true}  onChangeText = {x => (setUsersenha(x))}/>
                        </View>

                        <View style={maxestilo.vwentrar2}>
                            <TouchableHighlight onPress = {verificasenha}>
                                <Text style={maxestilo.botaoentrar2}>Entrar</Text>
                            </TouchableHighlight>
                        </View>



                    </ImageBackground>
                </Modal>

                {/* MODAL TIPO DE CONTA */}
                <Modal visible={Tipodeconta}>
                    <ImageBackground  style={maxestilo.img3} source={require('../assets/tipodeconta.png')}>

                        <View style={maxestilo.vwtipodeconta}>

                            <View style={maxestilo.vwtouchtipo}>
                                <TouchableHighlight style={maxestilo.vwtouchtipo1} onPress={()=>(setcadastro(true))}>
                                    <Text style={maxestilo.txttipodeconta}>Aluno</Text>
                                </TouchableHighlight>
                            </View>

                            <View style={maxestilo.vwtouchtipo}>
                            <TouchableHighlight style={maxestilo.vwtouchtipo1}>
                                <Text style={maxestilo.txttipodeconta}>Professor</Text>
                            </TouchableHighlight>
                            </View>

                            <View style={maxestilo.vwtouchtipo}> 
                            <TouchableHighlight style={maxestilo.vwtouchtipo1}>
                                <Text style={maxestilo.txttipodeconta}>Academia</Text>
                            </TouchableHighlight>
                            </View>


                        </View>

                        <View style={maxestilo.vwvoltartipo}> 
                            <TouchableHighlight onPress={()=>setTipodeconta(false)}>
                                <Text style={{fontSize:22,}}></Text>
                            </TouchableHighlight>
                        </View>

                    </ImageBackground>

                </Modal>
                
           </View>
        )
    
}

