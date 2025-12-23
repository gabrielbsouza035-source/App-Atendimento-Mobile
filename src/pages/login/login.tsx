import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Recebemos onNavigate (para registro) e onLogin (para a Home) como props
export default function LoginScreen({ onNavigate, onLogin }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Logo baseada na referência CliniCarx */}
        <Image 
          source={{ uri: 'https://seu-link-da-logo.com/logo.png' }} 
          style={styles.logo} 
          resizeMode="contain"
        />

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#999"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
        />

        {/* Botão para simular a entrada na Home */}
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Não possui conta?</Text>
        
        {/* Botão para trocar para a tela de Registro */}
        <TouchableOpacity style={styles.linkButton} onPress={onNavigate}>
          <Text style={styles.linkText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7', // Fundo azulado claro como na imagem
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
    // Sombra para dar profundidade ao card
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0fb184', // Verde esmeralda
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footerText: {
    color: '#64748b',
    fontSize: 14,
    marginBottom: 5,
  },
  linkButton: {
    padding: 10,
    backgroundColor: '#0fb184',
    borderRadius: 8,
    width: '60%',
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});