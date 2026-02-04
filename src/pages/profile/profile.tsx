import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/header';

// 1. Interface alinhada com o index.tsx e commonProps
interface ProfileProps {
  onBack: () => void;           // Resolve o erro do index.tsx
  onLogout: () => void;
  onNavigateProfile: () => void;
  onNavigateHome: () => void;    // Obrigatório para o Header
  theme: any;                   // Recebe o objeto do tema
}

export default function ProfileScreen({ 
  onBack, 
  onLogout, 
  onNavigateProfile, 
  onNavigateHome, 
  theme 
}: ProfileProps) {
  
  // 2. Estilos que usam as cores do seu theme.ts
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.background,
    },
    container: {
      padding: 20,
    },
    welcomeBanner: {
      backgroundColor: theme.header,
      padding: 25,
      borderRadius: theme.radius || 12,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: theme.primary,
    },
    welcomeText: {
      color: theme.primary,
      fontSize: 22,
      fontWeight: 'bold',
    },
    card: {
      backgroundColor: theme.card,
      borderRadius: theme.radius || 12,
      padding: 20,
      elevation: 4,
      shadowColor: theme.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    label: {
      color: theme.textLight,
      fontSize: 14,
      marginBottom: 8,
      fontWeight: '600',
    },
    input: {
      backgroundColor: theme.inputBg,
      borderColor: theme.inputBorder,
      borderWidth: 1,
      borderRadius: theme.radius || 8,
      padding: 12,
      color: theme.text,
      marginBottom: 20,
    },
    saveButton: {
      backgroundColor: theme.primary,
      padding: 16,
      borderRadius: theme.radius || 8,
      alignItems: 'center',
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
    backLink: {
      marginTop: 15,
      alignItems: 'center',
    },
    backLinkText: {
      color: theme.textLight,
      fontSize: 14,
      textDecorationLine: 'underline',
    }
  });

  return (
    <View style={styles.safeArea}>
      {/* O Header recebe todas as funções de navegação */}
      <Header 
        onLogout={onLogout} 
        onNavigateProfile={onNavigateProfile} 
        onNavigateHome={onNavigateHome} 
      />
      
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.welcomeBanner}>
          <Text style={styles.welcomeText}>Meu Perfil</Text>
          <Text style={{ color: theme.textLight }}>Gerencie suas informações</Text>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.label}>NOME COMPLETO</Text>
            <TextInput 
              style={styles.input} 
              defaultValue="Usuário Teste" 
              placeholderTextColor={theme.textLight}
            />
          </View>

          <View>
            <Text style={styles.label}>E-MAIL</Text>
            <TextInput 
              style={styles.input} 
              defaultValue="usuario@teste.com"
              keyboardType="email-address"
              placeholderTextColor={theme.textLight}
            />
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>SALVAR ALTERAÇÕES</Text>
          </TouchableOpacity>

          {/* Botão que usa a função onBack vinda do index */}
          <TouchableOpacity style={styles.backLink} onPress={onBack}>
            <Text style={styles.backLinkText}>Voltar para a Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}