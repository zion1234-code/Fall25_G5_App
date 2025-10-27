import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Fall25_G5 App</Text>
      <Button title="Go to Minutes" onPress={() => navigation.navigate('Minutes')} />
      <Button title="Go to PBI Table" onPress={() => navigation.navigate('PBI')} />
    </View>
  );
}

function MinutesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meeting Minutes</Text>
      <Text>- 10/23/2025: Project setup and Expo app created</Text>
      <Text>- Each member assigned PBIs</Text>
      <Text>- Next meeting: 10/26/2025</Text>
    </View>
  );
}


function PBIScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PBI Table</Text>
      <Text>- PBI 1: Create Expo app (Owner: Zion, Status: Done)</Text>
      <Text>- PBI 2: Set up minutes folder (Owner: Team, Status: In Progress)</Text>
      <Text>- PBI 3: Add real meeting minutes (Owner: Zion, Status: In Progress)</Text>
      <Text>- PBI 4: Add real PBI table (Owner: Team, Status: Pending)</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Minutes" component={MinutesScreen} />
        <Stack.Screen name="PBI" component={PBIScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
