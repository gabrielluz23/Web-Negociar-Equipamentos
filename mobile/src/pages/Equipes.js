import React,{useState} from 'react';
import {SafeAreaView,Image,StyleSheet,ScrollView} from 'react-native';
import logo from '../images/logo.jpg';

import EquipsList from '../Components/EquipsList';
import EquiplistUser from '../Components/EquipListUser';

export default function Equipes() {
    return <SafeAreaView style={styles.container}>
       <Image source= {logo} style= {styles.image}/>
<ScrollView>
        <EquiplistUser></EquiplistUser>
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
 })