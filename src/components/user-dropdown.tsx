import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

interface UserDropdownProps {
  isVisible: boolean;
  onNavigateProfile: () => void;
  onLogout: () => void;
  onClose: () => void;
}

export function UserDropdown({ isVisible, onNavigateProfile, onLogout, onClose }: UserDropdownProps) {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="none" // REMOVIDO O FADE PARA FECHAR DIRETO
      onRequestClose={onClose}
    >
      {/* Camada que detecta o toque fora */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          
          {/* O Menu */}
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              <TouchableOpacity 
                style={styles.item} 
                onPress={() => {
                  console.log('Dashboard');
                  onClose();
                }}
              >
                <Text style={styles.text}>Dashboard</Text>
              </TouchableOpacity>

              <View style={styles.separator} />

              <TouchableOpacity 
                style={styles.item} 
                onPress={() => {
                  console.log('Admin');
                  onClose();
                }}
              >
                <Text style={styles.text}>Admin</Text>
              </TouchableOpacity>

              <View style={styles.separator} />

              <TouchableOpacity 
                style={styles.item} 
                onPress={() => {
                  onNavigateProfile();
                  onClose();
                }}
              >
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
          </TouchableWithoutFeedback>

        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    position: 'absolute',
    top: 70, 
    right: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 5,
    minWidth: 160,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
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