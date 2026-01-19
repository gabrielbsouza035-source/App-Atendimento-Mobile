import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/header';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F8F9FA' }}>
      <Header />
      
      <ScrollView contentContainerStyle={styles.container}>
        {/* Banner de Boas-vindas */}
        <View style={styles.welcomeBanner}>
          <Text style={styles.welcomeText}>Bem-vindo, Perfil!</Text>
        </View>

        {/* Botões de Navegação Horizontal */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.tabButtonTextActive}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabButtonText}>Alterar Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabButtonText}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabButtonText}>Empresa</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Card de Informações do Usuário */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Informações do Usuário</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome completo:</Text>
            <TextInput style={styles.input} value="vtmpc2" placeholderTextColor="#999" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail:</Text>
            <TextInput style={styles.input} value="vtmpc@gmail.com" keyboardType="email-address" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefone:</Text>
            <TextInput style={styles.input} value="(00) 00000-0000" keyboardType="phone-pad" />
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>

        {/* Card de Feedback (Opcional, seguindo a imagem) */}
        <View style={[styles.card, { marginTop: 20, minHeight: 150 }]}>
          <Text style={[styles.cardTitle, { color: '#9333EA' }]}>Feedback</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  welcomeBanner: {
    backgroundColor: '#1E1B2E', // Roxo escuro da imagem
    padding: 25,
    borderRadius: 12,
    marginBottom: 20,
  },
  welcomeText: {
    color: '#A855F7', // Lilás vibrante
    fontSize: 22,
    fontWeight: 'bold',
  },
  tabsContainer: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#E9D5FF', // Roxo bem clarinho
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#9333EA', // Roxo principal
  },
  tabButtonText: {
    color: '#9333EA',
    fontWeight: '600',
  },
  tabButtonTextActive: {
    color: '#FFF',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    elevation: 4, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    color: '#A855F7',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#F9FAFB',
  },
  saveButton: {
    backgroundColor: '#9333EA',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});