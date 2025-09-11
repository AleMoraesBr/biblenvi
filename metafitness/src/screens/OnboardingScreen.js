import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function OnboardingScreen({ onDone }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Metafitness</Text>
      <Text style={styles.subtitle}>Em 3 min configuramos seu plano.</Text>
      <Button title="Começar" onPress={onDone} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title: { fontSize:24, fontWeight:'bold', marginBottom:10 },
  subtitle: { fontSize:16, textAlign:'center', marginBottom:20 }
});
