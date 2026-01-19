import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserDropdown } from './user-dropdown';

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      "Sair",
      "Deseja realmente sair da aplicação?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sair", 
          style: "destructive", 
          onPress: () => router.replace('/' as any) 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ClinicarX</Text>
      
      <TouchableOpacity 
        activeOpacity={0.7}
        onPress={() => setDropdownOpen(!dropdownOpen)}
      >
        <Image 
          source={{ uri: 'https://github.com/github.png' }} 
          style={styles.avatar}
        />
      </TouchableOpacity>

      <UserDropdown 
        isVisible={dropdownOpen}
        onClose={() => setDropdownOpen(false)}
        onNavigateProfile={() => router.push('/profile' as any)}
        onLogout={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    zIndex: 1000,
  },
  logo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#9333EA',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: '#9333EA',
    backgroundColor: '#E5E7EB',
  },
});