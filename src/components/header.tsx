import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header() {
  return (
    // SafeAreaView garante que o conteúdo não fique embaixo da câmera/entalhe do celular
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Lado Esquerdo: Logo ou Nome */}
        <View style={styles.leftContainer}>
          <Text style={styles.brandName}>CliniCarx</Text>
        </View>

        {/* Lado Direito: Ícone ou Botão de Perfil */}
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff', // Fundo branco igual ao card de login
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0', // Linha sutil para separar do corpo
  },
  container: {
    height: 60,
    flexDirection: 'row', // Alinha os itens em linha (horizontal)
    alignItems: 'center',
    justifyContent: 'space-between', // Joga a logo pra esquerda e perfil pra direita
    paddingHorizontal: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0fb184', // Verde padrão
  },
  profileButton: {
    padding: 5,
  },
  avatarPlaceholder: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#475569',
  },
});