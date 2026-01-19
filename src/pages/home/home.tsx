import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Bem Vindo,</Text>
          <Text style={styles.subtitle}>Selecione um módulo para continuar.</Text>
        </View>

        <View style={styles.modulesContainer}>
          {/* Módulo Dashboard */}
          <TouchableOpacity style={styles.moduleCard}>
            <Text style={styles.moduleTitle}>Dashboard</Text> 
            <Text style={styles.moduleSubtitle}>Visualiza indicadores, estatísticas e visão geral da operação.</Text>
          </TouchableOpacity>

          {/* Módulo Perfil */}
          <TouchableOpacity style={styles.moduleCard}>
            <Text style={styles.moduleTitle}>Meu Perfil</Text> 
            <Text style={styles.moduleSubtitle}>Gerencie seus dados, empresa, unidades e senha.</Text>
          </TouchableOpacity>

          {/* Módulo Admin */}
          <TouchableOpacity style={styles.moduleCard}>
            <Text style={styles.moduleTitle}>Admin</Text> 
            <Text style={styles.moduleSubtitle}>Gerencie a parte Administrativa geral do Sistema.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  content: {
    padding: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e1b2e',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 20,
  },
  modulesContainer: {
    paddingHorizontal: 20,
  },
  moduleCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    // Sombra
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9333ea', // Roxo combinando com seu tema
    marginBottom: 8,
  },
  moduleSubtitle: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
});