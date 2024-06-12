import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const HistoryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>História de Presidente Prudente</Text>
      <Image source={require('../assets/history.jpg')} style={styles.image} />
      <Text style={styles.text}>
        Presidente Prudente é uma cidade no estado de São Paulo, fundada em 1917. É conhecida
        por sua rica história e desenvolvimento ao longo dos anos...
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
});

export default HistoryScreen;
