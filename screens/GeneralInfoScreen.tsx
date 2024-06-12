import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const GeneralInfoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Informações Gerais</Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>População:</Text> 230.000 habitantes
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Geografia:</Text> Localizada no Oeste Paulista
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Clima:</Text> Tropical
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Economia:</Text> Baseada em serviços e comércio
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
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default GeneralInfoScreen;
