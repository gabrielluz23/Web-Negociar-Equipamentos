import React from 'react';
import {View,TouchableOpacity,StyleSheet} from 'react-native';

export default function Cadastro() {
    return <View> 

<TouchableOpacity  onPress={handleSubmit}style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>
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
    buttonText:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize:15,
    },
})