import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const UsefulContactsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Contatos Úteis</Text>
      <Text style={styles.contactCategory}>Emergência</Text>
      <Text style={styles.contact}>Polícia: 190</Text>
      <Text style={styles.contact}>Bombeiros: 193</Text>
      <Text style={styles.contactCategory}>Hospitais</Text>
      <Text style={styles.contact}>Hospital Regional: (18) 3229-1500</Text>
      <Text style={styles.contact}>Santa Casa: (18) 3222-4400</Text>
      <Text style={styles.contactCategory}>Transporte Público</Text>
      <Text style={styles.contact}>Ônibus Urbano: (18) 3221-1234</Text>
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
  contactCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  contact: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default UsefulContactsScreen;
