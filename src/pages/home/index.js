
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import {Logo} from '../../components/logo'


export function Home(){
return(
    <SafeAreaView style={styles.container}>
 <Logo/> 
 <Text styles={styles.title}>Encontre a Receita</Text>
 <Text styles={styles.title}>que combine com você! </Text>

 <View style={styles.form}>
<TextInput
placeholder="Digite o nome da comida..."
style={styles.input}
/>

<TouchableOpacity>
<Ionicons name="search" size={28} color="#4CBE6C"

</TouchableOpacity>

 </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor: '#F3F9FF',
paddingTop: 36,
paddingStart: 14,
paddingEnd: 14,
},
title:{
    fontsize: 26,
    fontWeight:'bold',
    color: "#0e0e0e"
}
})