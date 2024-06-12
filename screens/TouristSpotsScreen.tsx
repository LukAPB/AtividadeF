import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const TouristSpotsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Pontos Turísticos</Text>
      <View style={styles.spot}>
        <Image source={require('../assets/spot1.jpg')} style={styles.image} />
        <Text style={styles.spotText}>Parque do Povo</Text>
        <Text style={styles.description}>Um grande parque com áreas de lazer, esportes e eventos.</Text>
      </View>
      <View style={styles.spot}>
        <Image source={require('../assets/spot2.jpg')} style={styles.image} />
        <Text style={styles.spotText}>Museu Histórico</Text>
        <Text style={styles.description}>Preserva a história e cultura da cidade.</Text>
      </View>
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
  spot: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  spotText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default TouristSpotsScreen;
