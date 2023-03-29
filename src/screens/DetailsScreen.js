import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetailsScreen(props) {
  console.log(props)
  const { usuario, edad, imc, clase } = props;
  return (
    <View style={styles.viewDetails}>
          <View style={styles.details}>
          <Text style={styles.title}>Calculadora IMC</Text>
          <Text style={styles.text}> Hola {usuario}  tienes {edad} años y tu imc es: {imc} estas clasificado en: {clase}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  viewDetails: {
    marginTop: 20,
    marginHorizontal: 40,
  },
  details: {
    padding: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 50,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  }
})