import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface UserDropdownProps {
  isVisible: boolean;
  onNavigateProfile: () => void;
  onLogout: () => void;
  onClose: () => void;
}

export function UserDropdown({ isVisible, onNavigateProfile, onLogout, onClose }: UserDropdownProps) {
  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.item} 
        onPress={() => {
          onNavigateProfile();
          onClose();
        }}
      >
        <Text style={styles.text}>Dashboard</Text>

        <Text style={styles.text}>Admin</Text>
        
        <Text style={styles.text}>Meu Perfil</Text>
        
      </TouchableOpacity>

        
      <View style={styles.separator} />

      <TouchableOpacity 
        style={styles.item} 
        onPress={() => {
          onLogout();
          onClose();
        }}
      >
        <Text style={[styles.text, { color: '#EF4444' }]}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 5,
    minWidth: 160,
    // Sombra para iOS e Android
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    zIndex: 9999,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginHorizontal: 10,
  },
});