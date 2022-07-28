import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.container_form}>
          <Text style={styles.title_field}>Email</Text>
          <TextInput style={styles.field} placeholder="E-mail" />
          <Text style={styles.title_field}>Senha</Text>
          <TextInput style={styles.field} placeholder="Senha" />
        </View>
        <Text style={styles.forgot_password}>Esqueceu a senha?</Text>
        <TouchableOpacity style={styles.button_login}>
          <Text style={styles.label_button_login}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.label_sign_up}>
          Não possui uma conta?
          <Text style={styles.bold_sign_up}> Cadastre-se</Text>
        </Text>
      </View>
    </View>
  );
}
