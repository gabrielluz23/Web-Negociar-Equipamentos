import React from 'react';
import {View,KeyboardAvoidingView,Image,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import logo from '../images/logo.jpg';
export default function Login() {
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
    />
      <Text style={styles.label}>Sua Senha</Text>
    <TextInput
        style= {styles.input}
        placeholder= "Sua Senha"
        placeholderTextColor= '#999'
        autoCapitalize="words"
        autoCorrect={false}
        secureTextEntry={true}

    />
    <TouchableOpacity style={styles.button}>
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