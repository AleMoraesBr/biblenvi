import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu dia</Text>
      <Button title="Treino" onPress={() => navigation.navigate('Workout')} />
      <Button title="Alimentação" onPress={() => navigation.navigate('Nutrition')} />
      <Button title="Progresso" onPress={() => navigation.navigate('Progress')} />
      <Button title="Perfil" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', gap:10 },
  title: { fontSize:22, marginBottom:20 }
});
