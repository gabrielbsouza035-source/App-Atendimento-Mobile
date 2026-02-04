import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/header';

// 1. Interface Única e Corrigida: Adicionamos onNavigateHome e theme
interface HomeScreenProps {
  onLogout: () => void;
  onNavigateProfile: () => void;
  onNavigateHome: () => void; // Necessário para o Header não dar erro
  theme: any; // Recebe o tema vindo do index.tsx
}

export default function HomeScreen({ onLogout, onNavigateProfile, onNavigateHome, theme }: HomeScreenProps) {
  
  // 2. Estilos Dinâmicos: Aplicando as cores do seu theme.ts
  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      backgroundColor: theme.background // Usa a cor de fundo do tema
    },
    scrollContent: { paddingBottom: 30 },
    content: { padding: 20, marginTop: 10 },
    title: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      color: theme.text // Usa a cor de texto do tema
    },
    subtitle: { 
      fontSize: 16, 
      color: theme.textLight, // Usa a cor de texto secundário do tema
      marginBottom: 20 
    },
    modulesContainer: { paddingHorizontal: 20 },
    moduleCard: {
      backgroundColor: theme.card, // Usa a cor do card do tema
      padding: 20,
      borderRadius: theme.radius || 15,
      marginBottom: 15,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    moduleTitle: { 
      fontSize: 18, 
      fontWeight: 'bold', 
      color: theme.primary // Usa a cor primária do tema (ex: Rosa, Verde ou Roxo)
    },
    moduleSubtitle: { 
      fontSize: 14, 
      color: theme.textLight 
    },
  });

  return (
    <View style={styles.container}>
      {/* 3. Repasse de Props: O Header agora recebe todas as funções obrigatórias */}
      <Header 
        onLogout={onLogout} 
        onNavigateProfile={onNavigateProfile} 
        onNavigateHome={onNavigateHome} 
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Bem Vindo,</Text>
          <Text style={styles.subtitle}>Selecione um módulo para continuar.</Text>
        </View>

        <View style={styles.modulesContainer}>
          <TouchableOpacity style={styles.moduleCard} activeOpacity={0.7}>
            <Text style={styles.moduleTitle}>Dashboard</Text> 
            <Text style={styles.moduleSubtitle}>Visualiza indicadores, estatísticas e visão geral da operação.</Text>
          </TouchableOpacity>

          {/* Clique para ir ao Perfil */}
          <TouchableOpacity 
            style={styles.moduleCard} 
            activeOpacity={0.7}
            onPress={onNavigateProfile}
          >
            <Text style={styles.moduleTitle}>Meu Perfil</Text> 
            <Text style={styles.moduleSubtitle}>Gerencie seus dados, empresa, unidades e senha.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.moduleCard} activeOpacity={0.7}>
            <Text style={styles.moduleTitle}>Admin</Text> 
            <Text style={styles.moduleSubtitle}>Gerencie configurações administrativas do sistema.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}