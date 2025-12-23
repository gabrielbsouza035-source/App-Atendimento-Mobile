import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen({ onNavigate }: any) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://seu-link-da-logo.com/logo.png' }} 
            style={styles.logo} 
            resizeMode="contain"
          />

          <Text style={styles.title}>Crie sua conta</Text>

          <TextInput style={styles.input} placeholder="Nome Completo" placeholderTextColor="#999" />
          <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#999" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" secureTextEntry />
          <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="#999" secureTextEntry />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>Já possui uma conta?</Text>
          
          <TouchableOpacity style={styles.linkButtonOutline} onPress={onNavigate}>
            <Text style={styles.linkTextGreen}>Voltar para o Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    elevation: 4,
  },
  logo: { width: 150, height: 60, marginBottom: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#334155', marginBottom: 20 },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0fb184',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  footerText: { color: '#64748b', fontSize: 14, marginBottom: 5 },
  linkButtonOutline: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#0fb184',
    borderRadius: 8,
    width: '70%',
    alignItems: 'center',
  },
  linkTextGreen: { color: '#0fb184', fontWeight: 'bold' }
});