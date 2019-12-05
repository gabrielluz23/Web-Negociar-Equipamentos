import React,{useState,useEffect} from 'react';
import {View,TouchableOpacity,StyleSheet,Text,Image,FlatList,ScrollView} from 'react-native';
import logo from '../images/logo.jpg';
import api from '../services/api';

export default function Contato({navigation}) {
    
    
    const [equips,setequips] = useState([]);
    const [users,setuser] = useState([]);
    useEffect(() => {
        async function loadEquips() {
            const equip_id = await navigation.getParam('id');
         const response = await api.get('/negocio',{
             params: {equip_id}
         })
         setequips(response.data);
        } 
        loadEquips();
    },[]);
    useEffect(() => {
        async function loadEquips() {
            const user_id = await navigation.getParam('user');
         const response = await api.get('/unicouser',{
             headers: {user_id}
         })
         setuser(response.data);
        } 
        loadEquips();
    },[]);


    async function voltar() {
        navigation.navigate('Equipes');
    }
    

    return <View> 
        
        <Image source= {logo} style= {styles.image}/>
        <TouchableOpacity  onPress={voltar}style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <ScrollView>
        <FlatList
        style={styles.list}
        data={equips}
        keyExtractor={equip => equip._id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item })=>(
            <View style={styles.listItem}>
            <Image source={{uri:item.imagemEquip_url}} style={styles.img2}/>
            <Text style= {styles.titulo}>{item.titulo}</Text>
            <Text style= {styles.desc}><Text style= {styles.desctitulo}> Descrição do Equipamento: </Text> {item.descricao}</Text>
            <Text style= {styles.valor}> <Text style = {styles.valortitulo}>Valor do Equipamento: </Text> {item.valor ? `R$${item.valor} `: `apenas Troca`}</Text>
            </View>
        )}/>
          <FlatList
        style={styles.list}
        data={users}
        keyExtractor={user => user._id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item })=>(
            <View>
            <Text style= {styles.nome}><Text style= {styles.nometitulo}> Nome do Dono: </Text> {item.nome}</Text>
            <Text style= {styles.numero}> <Text style = {styles.numerotitulo}>Entre em contato pelo numero : </Text> {item.telefone}  </Text>
            <Text style= {styles.email}> <Text style = {styles.emailtitulo}> Ou pelo email : </Text> {item.email}  </Text>
            </View>
            )}/>
       
        </ScrollView>
        </View>
    
}


const styles = StyleSheet.create({
    button:{
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    titulo:{
        fontSize: 64,
        fontWeight:'bold',
        color:'#333',
        marginTop:10
    },
    buttonText:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize:15,
    },
    image: {
        maxWidth: 60,
        maxHeight: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    },
    img2: {
        width: 400,
        height: 300,
        resizeMode: 'cover',
        borderRadius: 2
    },
    valor:{
        fontSize:15,
        marginTop:5
    },
    nome:{
        fontSize:15,
        marginTop:5
    },
    numero:{
        fontSize:15,
        marginTop:5
    },
    email:{
        fontSize:15,
        marginTop:5
    },
    nometitulo:{
        fontWeight: 'bold',
        fontSize:15,
        marginTop:5
    },
    numerotitulo:{
        fontWeight: 'bold',
        fontSize:15,
        marginTop:5
    },
    emailtitulo:{
        fontWeight: 'bold',
        fontSize:15,
        marginTop:5
    },
    desc: {
        marginTop: 5,
        fontSize:15,
        
    },
    valortitulo:{
        fontSize:15,
        fontWeight: 'bold',
        marginTop:5
    },
    desctitulo: {
        fontWeight: 'bold',
        marginTop: 5,
        fontSize:15,
        
    },
})
