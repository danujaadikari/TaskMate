import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskDetailScreen = ({ route }) => {
  const { task } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Detail Screen</Text>
      {task && <Text style={styles.taskTitle}>{task.title}</Text>}
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
  taskTitle: {
    fontSize: 18,
    color: '#666'
  }
});

export default TaskDetailScreen;
