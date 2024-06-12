import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HistoryScreen from '../screens/HistoryScreen';
import TouristSpotsScreen from '../screens/TouristSpotsScreen';
import GeneralInfoScreen from '../screens/GeneralInfoScreen';
import UsefulContactsScreen from '../screens/UsefulContactsScreen';
import Ionicons from '@react-native-vector-icons/ionicons';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'História') {
              iconName = 'book';
            } else if (route.name === 'Pontos Turísticos') {
              iconName = 'location';
            } else if (route.name === 'Informações Gerais') {
              iconName = 'information-circle';
            } else if (route.name === 'Contatos Úteis') {
              iconName = 'call';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="História" component={HistoryScreen} />
        <Tab.Screen name="Pontos Turísticos" component={TouristSpotsScreen} />
        <Tab.Screen name="Informações Gerais" component={GeneralInfoScreen} />
        <Tab.Screen name="Contatos Úteis" component={UsefulContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabsNavigator;
