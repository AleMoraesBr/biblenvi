import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProgressScreen() {
  const [weights, setWeights] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('weights').then((data) => {
      if (data) setWeights(JSON.parse(data));
    });
  }, []);

  const addWeight = async () => {
    if (!value) return;
    const entry = {
      date: new Date().toISOString().split('T')[0],
      value: parseFloat(value),
    };
    const updated = [entry, ...weights];
    setWeights(updated);
    await AsyncStorage.setItem('weights', JSON.stringify(updated));
    setValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progresso</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />
        <Button title="Salvar" onPress={addWeight} />
      </View>
      <FlatList
        data={weights}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{`${item.date}: ${item.value} kg`}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  row: { flexDirection: 'row', gap: 10, marginBottom: 10, alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 },
  item: { paddingVertical: 4 },
});
