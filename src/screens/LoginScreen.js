import { StyleSheet, Text, View, TextInput, Image} from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker'

export default function LoginScreen() {
  const [selectedValue, setSelectedValue] = React.useState("Administrador");
  let usuario = ""
  let contraseña = ""
  const user = "Admin"
  const passwd = "Admin123"
  return (
    <View>
      <View>
        <View style={styles.imgC}>
          <Image style={styles.img} source={require('../assets/img/logo.png')} />
        </View>
        <Text style={styles.text}>Usuario:</Text>
        <TextInput keyboardType='text' style={styles.input} onChangeText={(text) =>  usuario = text}/>
        <Text style={styles.text}>Contraseña:</Text>
        <TextInput keyboardType='text' style={styles.input} onChangeText={(text) =>  contraseña = text}/>
        <Text style={styles.text}>Rol:</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Administrador" value="Administrador" />
          <Picker.Item label="Usuario" value="Usuario" />
          <Picker.Item label="Invitado" value="Invitado" />   
        </Picker>
      </View>
      <View>
        <Button style={styles.button} title="Iniciar Sesion" onPress={() => {
          if (usuario === "" || contraseña === "") {
            alert("Por favor!, ingrese todos los campos")
          } else {
            if (usuario === user && contraseña === passwd) {
              alert("Bienvenido " + usuario)
            } else {
              alert("Usuario y/o contraseña incorrectos")
            }
          }
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
},
img: {
  width: 200,
  height: 200,
},
imgC: {
  alignItems: 'center',
  justifyContent: 'center',
},
})
