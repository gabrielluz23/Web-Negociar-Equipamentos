import React,{useState} from 'react';
import {View,SafeAreaView,AsyncStorage,Image,StyleSheet,ScrollView,TouchableOpacity,Text} from 'react-native';
import logo from '../images/logo.jpg';
import img from '../images/icon.png';
import EquipsList from '../Components/EquipsList';
import EquiplistUser from '../Components/EquipListUser';

export default function Equipes({navigation}) {

    async function navegacao() {
        AsyncStorage.removeItem('id');
        navigation.navigate('Login');
    }
    async function navegacaoADD() {
        navigation.navigate('CadEquipes');
    }
    return <SafeAreaView style={styles.container}>
       <Image source= {logo} style= {styles.image}/>
       <TouchableOpacity onPress={navegacao} style = {styles.button}>
                    <Text style={styles.buttonText}>Sair</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={navegacaoADD} style = {styles.buttonEquip}>
                    <Text style={styles.AddEquip }>Adicionar Equipamento </Text>

                </TouchableOpacity>
<ScrollView>
  
    
        <EquiplistUser> 
        </EquiplistUser>
                  <EquipsList></EquipsList>
       </ScrollView>
    </SafeAreaView>
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
    image: {
        maxWidth: 60,
        maxHeight: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    },
    button:{
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    buttonText:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize:15,
    },
    AddEquip: {
        color:'#FFF',
        fontWeight: 'bold',
        fontSize:15,
    },
    buttonEquip:{
        height: 32,
        backgroundColor: '#008000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop:10
    },
    img3: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 2,
       
    },
 })