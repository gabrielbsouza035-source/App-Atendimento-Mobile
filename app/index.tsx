import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

// 1. CORREÇÃO DE IMPORT: No TypeScript, não usamos a extensão .js no final do import
// Se o seu arquivo for 'theme.ts', importe apenas de '../src/styles/theme'
import { themes, ThemeType } from '../src/styles/theme';

import HomeScreen from '../src/pages/home/home';
import LoginScreen from '../src/pages/login/login';
import ProfileScreen from '../src/pages/profile/profile';

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState('login'); 
  
  // 2. TIPO: O ThemeType garante que o VS Code saiba quais temas existem
  const [themeName, setThemeName] = useState<ThemeType>('default'); 

  // 3. SEGURANÇA: Fallback para o tema default caso haja erro no carregamento
  const theme = themes[themeName] || themes.default;

  // Funções de navegação
  const goToHome = () => setCurrentScreen('home');
  const goToLogin = () => setCurrentScreen('login');
  const goToProfile = () => setCurrentScreen('profile');

  // Propriedades distribuídas para as telas
  // Isso resolve o erro de "onNavigateHome is missing" nas páginas
  const commonProps = {
    onLogout: goToLogin,
    onNavigateProfile: goToProfile,
    onNavigateHome: goToHome,
    theme: theme,
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      {/* Ajusta a cor dos ícones da barra de status (hora, bateria) conforme o tema */}
      <StatusBar 
        barStyle={themeName === 'default' ? 'dark-content' : 'light-content'} 
        backgroundColor={theme.background}
      />
      
      <View style={{ flex: 1 }}>
        {currentScreen === 'login' && (
          <LoginScreen 
            onNavigate={() => {}} 
            onLogin={goToHome}
          />
        )}
        
        {/* Passa todas as funções e o tema para a Home */}
        {currentScreen === 'home' && <HomeScreen {...commonProps} />}

        {/* Passa o onBack adicional para a tela de Perfil */}
        {currentScreen === 'profile' && (
          <ProfileScreen 
            {...commonProps} 
            onBack={goToHome} 
          />
        )}
      </View>
    </SafeAreaView>
  );
}