import { Feather } from '@expo/vector-icons'; // Resolve erro de 'Feather'
import React, { useState } from 'react'; // Resolve erro de 'useState'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'; // Resolve erros de 'View', 'TouchableOpacity' e 'StyleSheet'

import LogoImage from '../../assets/logo.png';
import { UserDropdown } from './user-dropdown';

// 1. Tipagem: Definimos a interface ANTES da função
interface HeaderProps {
  onLogout: () => void;
  onNavigateProfile: () => void;
  onNavigateHome: () => void;
}

export function Header({ onLogout, onNavigateProfile, onNavigateHome }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* Clique na Logo para voltar Home */}
      <TouchableOpacity onPress={onNavigateHome} activeOpacity={0.7}>
        <Image 
          source={LogoImage} 
          style={styles.logo} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.avatar} 
        onPress={() => setDropdownOpen(!dropdownOpen)}
        activeOpacity={0.7}
      >
        <Feather name="user" size={24} color="#9333ea" />
      </TouchableOpacity>

      <UserDropdown 
        isVisible={dropdownOpen}
        onClose={() => setDropdownOpen(false)}
        onNavigateProfile={onNavigateProfile} 
        onLogout={onLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({ // 'create' agora vai existir pois StyleSheet foi importado
  container: {
    height: 80,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    zIndex: 1000,
    elevation: 4,
  },
  logo: { 
    width: 120, 
    height: 40, 
  },
  avatar: { 
    width: 44,
    height: 44,
    borderRadius: 22, 
    borderWidth: 1.5, 
    borderColor: '#9333ea', 
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});