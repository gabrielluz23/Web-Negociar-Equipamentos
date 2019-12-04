import React,{useState,useEffect} from 'react';
import { withNavigation} from 'react-navigation';
import {View,AsyncStorage,Text,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';

import api from '../services/api';
import img from '../images/icon.png';


 function EquipsListUser({navigation}) {
    const [equips,setequips] = useState([]);
    useEffect(() => {
        async function loadEquips() {
            const user_id = await AsyncStorage.getItem('id')
         const response = await api.get('/usuario',{
             headers: {user_id}
         })
         setequips(response.data);
        } 
        loadEquips();
    },[]);
    async function deleteEquip(id) {
        api.delete('/equipamento',{
            params:{id}
        
        })
        navigation.navigate('Login');
       
    }
 
    return <View style = { styles.container}>
           
        <Text style={styles.tittle}>Todos os seus Equipamento Cadastrados </Text>


        <FlatList
        style={styles.list}
        data={equips}
        keyExtractor={equip => equip._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item })=>(
            
            <View  style={styles.listItem}>

                <Image source={{uri:item.imagemEquip_url}} style={styles.img2}/>
                <Text style= {styles.titulo}>{item.titulo}</Text>
                <Text style= {styles.desc}>{item.descricao}</Text>
                <Text style= {styles.valor}>{item.valor ? `R$${item.valor} `: `apenas Troca`}</Text>
                <TouchableOpacity onPress={()=>{deleteEquip(item._id)}} style = {styles.button}>
                    <Text style={styles.buttonText}>Excluir</Text>

                </TouchableOpacity>
                </View>
        )}
        />
    </View>
}
const styles = StyleSheet.create({
container: {
 marginTop:30,
},
tittle: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal:20,
    marginBottom:15,
},
list: {
paddingHorizontal:20,
},
listItem: {
 marginRight: 15
},
    img2: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 2
    },

    titulo:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#333',
        marginTop:10
    },
    valor:{
        fontSize:15,
        color: '#999',
        marginTop:5
    },
    desc: {
        marginTop: 5,
        fontSize:15,
        
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
})
export default withNavigation(EquipsListUser);