import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'
import { Input, Button, Icon } from 'react-native-elements'

export default function LoginForm() {
    const user = "Admin"
    const passwd = "Admin123"

    
  return (
    <View style={styles.container}>
  <Image
    source={require('../assets/img/logo.png')}
    style={styles.logo}
  />
  <View style={styles.inputContainer}>
    <Input
      placeholder="Usuario"
      leftIcon={
        <Icon
          type="material-community"
          name="account"
          size={24}
          color="gray"
        />
      }
      onChangeText={(text) => formik.setFieldValue('usuario', text)}
      errorMessage={formik.errors.usuario}
    />
    <Input
      placeholder="Contraseña"
      secureTextEntry={showPass ? false : true}
      leftIcon={
        <Icon
          type="material-community"
          name="lock"
          size={24}
          color="gray"
        />
      }
      rightIcon={
        <Icon
          type="material-community"
          name={showPass ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color="gray"
          onPress={showPassword}
        />
      }
      onChangeText={(text) => formik.setFieldValue('password', text)}
      errorMessage={formik.errors.password}
    />
    <Button
      title="Iniciar Sesión"
      buttonStyle={styles.button}
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting}
    />
  </View>
</View>
  )
}

const styles = StyleSheet.create({})