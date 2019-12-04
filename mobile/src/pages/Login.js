import React, {useState,useEffect} from 'react';
import {View,AsyncStorage,KeyboardAvoidingView,Image,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

import api from '../services/api';

import logo from '../images/logo.jpg';
export default function Login({navigation}) {
const [email,setemail] = useState('');
const [senha,setsenha] = useState('');

useEffect(() => {
AsyncStorage.getItem('id').then(user=>{
    if(user) {
        navigation.navigate('Equipes');
    }
})
},[])
async function handleSubmit() {
    const response = await api.post('/login',{
        email,senha
    })
    const { _id} = response.data;
    await AsyncStorage.setItem('id',_id);
    navigation.navigate('Equipes');
}

    return <KeyboardAvoidingView  behavior="padding" style= {styles.container}>
        <Image source= {logo} style= {styles.image}/>
    <View style= {styles.form}>
    <Text style={styles.label}>Seu E-mail</Text>
    <TextInput
        style= {styles.input}
        placeholder= "Seu Email"
        placeholderTextColor= '#999'
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setemail}
    />
      <Text style={styles.label}>Sua Senha</Text>
    <TextInput
        style= {styles.input}
        placeholder= "Sua Senha"
        placeholderTextColor= '#999'
        autoCapitalize="words"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={setsenha}

    />
    <TouchableOpacity  onPress={handleSubmit}style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    </View>
 </KeyboardAvoidingView>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        maxWidth: 100,
        maxHeight: 100
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop:30,
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    input:{
        borderWidth:1,
        borderColor:"#ddd",
        paddingHorizontal:20,
        fontSize:16,
        color:'#444',
        height:44,
        marginBottom:20,
        borderRadius:2
    },
    button:{
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    buttonText:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize:16,
    },
})