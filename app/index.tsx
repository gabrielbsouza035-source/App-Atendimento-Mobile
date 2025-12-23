import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from '../src/pages/home/home';
import LoginScreen from '../src/pages/login/login';
import RegisterScreen from '../src/pages/register/register';

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState('login'); 

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'login' && (
        <LoginScreen 
          onNavigate={() => setCurrentScreen('register')} 
          onLogin={() => setCurrentScreen('home')}
        />
      )}
      
      {currentScreen === 'register' && (
        <RegisterScreen onNavigate={() => setCurrentScreen('login')} />
      )}

      {currentScreen === 'home' && (
        <HomeScreen onLogout={() => setCurrentScreen('login')} />
      )}
    </View>
  );
}