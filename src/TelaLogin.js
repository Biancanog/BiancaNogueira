import React from 'react'; 
import {View,Text,InputText,StyleSheet} from 'recat-native'; 

const FlexDimensionsionsBasics = () => {
    return (

        <View style={{flex: 1}}>
        <View style= {{flex: 1, backgroudColor: 'powderblue'}}/>
        <Text style= {styles.heading}>Tela de login</Text>
        </View>
    );
}; 

const styles = StyleSheet.create({
    heading: {
        frontSize: 20, 
        frontWeight: 'bold', 
        marginBotton: 20, 
    },
});

export default FlexDimensionsionsBasics;

