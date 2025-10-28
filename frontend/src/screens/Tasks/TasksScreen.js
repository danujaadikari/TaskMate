import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TasksScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tasks Screen - Coming Soon</Text>
      <Text style={styles.subtitle}>View and manage all your tasks here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    padding: 20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#666'
  }
});

export default TasksScreen;
