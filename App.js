import React from 'react';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeScreen />
    </>
  );
}
