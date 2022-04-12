import React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ITask, TasksContext} from '../context/TaskContext';

export const TaskList = () => {
  const {tasks, removeTask} = React.useContext(TasksContext);
  const handleRemoveTask = (id: string) => {
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => removeTask(id),
      },
    ]);
  };
  return (
    <FlatList
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handleRemoveTask(item.id)}
          style={styles.buttonTask}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  titleTask: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 1,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
});
