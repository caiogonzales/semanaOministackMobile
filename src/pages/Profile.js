import React from 'react'
import { View, Image, StyleSheet, Text, Linking, TouchableOpacity, Platform } from 'react-native'
import { WebView } from 'react-native-webview'
function Profile({navigation}) {
    const email = navigation.getParam('email');
    const devName = navigation.getParam('name')
    const devAvatar = navigation.getParam('devAvatar')
    const services = navigation.getParam('services')
    const phone = navigation.getParam('phone')
    let numberNoSpace = phone.replace(" ", "");
    let numberFormat = numberNoSpace.replace("-", "");


    //return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUsername}` }}/>
    return ( 
        <>
            <View style={styles.perfil}>
                <Image style={styles.avatar} source={{ uri: devAvatar }}></Image>
                <Text style={styles.titulo}>{devName}</Text>
                <Text>{email}</Text>
                <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${numberFormat}`)}}>
                    <Text>{phone}</Text>
                </TouchableOpacity>
                <Text>Serviços prestados: {services}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    perfil:{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       marginTop: 20,
       paddingHorizontal:40
    },
    avatar: {
        width: 250,
        height: 250,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff',
        marginBottom: 20,
        backgroundColor: '#333'
    },
    titulo:{
        fontWeight: "bold",
        fontSize: 20,
        borderBottomWidth: 1,
    }
})

export default Profile