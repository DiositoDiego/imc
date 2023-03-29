import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

export default function FormScreen(props) {
    const { rol } = props
    let edad = 0.0
    let peso = 0.0
    let altura = 0.0
    let imc = 0.0
  return (
    <View>
      <View>
        <Text style={{...styles.text, marginBottom: 30}}>Rol: {rol}</Text>
        <Text style={styles.text}>Peso:</Text>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={(text) =>  edad = text}/>
        <Text style={styles.text}>Altura:</Text>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={(text) =>  peso = text}/>
        <Text style={styles.text}>Edad:</Text>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={(text) =>  altura = text}/>
      </View>
      <View>
        <Button style={styles.button} title="IMC" onPress={() => {
            imc = peso / (altura * altura)
            alert(`IMC: ${imc}`)
        }}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 50,
        border: '1px solid black',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5, 
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 50,
    },
    button: {
        marginTop: 70,
        width: 400,
        height: 70,
        borderRadius: 15,
        backgroundColor: '#000',
    },
    text: {
        fontSize: 20,
    }
})