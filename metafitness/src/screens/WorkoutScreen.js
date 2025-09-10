import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { exercises } from '../data/exercises';

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treino de Hoje</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text>{item.tempo_execucao}</Text>
            <Text>{item.cues.join(', ')}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  title: { fontSize:22, marginBottom:10 },
  card: { marginBottom:15, padding:10, backgroundColor:'#eee', borderRadius:6 },
  name: { fontSize:16, fontWeight:'bold' }
});
