import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { recipes } from '../data/recipes';

export default function NutritionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refeições Sugeridas</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text>{item.macros.kcal} kcal</Text>
            <Text>{item.tags.join(', ')}</Text>
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
