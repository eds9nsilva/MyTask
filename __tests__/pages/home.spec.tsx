import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Home} from '../../src/pages/Home';
import {renderHook, act} from '@testing-library/react-hooks';
import {TaskProvider, useTaskList} from '../../src/context/TaskContext';

describe('Home page', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);
    const inputNewTask = getByPlaceholderText('Nova tarefa...');
    expect(inputNewTask).toBeDefined();
    expect(inputNewTask.props.placeholder).toBeTruthy();
  });
  it('verifica a insercao', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TaskProvider,
    });
    const data = {id: 'Task01', title: 'Task01'};

    await act(() => result.current.addTask(data));
    expect(result.current.tasks).toBeTruthy();
  });
  it('verifica se o clique no botao insere um item na lista de tarefas', async () => {
    const {getByPlaceholderText, getByTestId} = render(<Home />, {
      wrapper: TaskProvider,
    });
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TaskProvider,
    });
    const data = {id: 'Task01', title: 'Task01'};
    const inputNewTask = getByPlaceholderText('Nova tarefa...');
    const button = getByTestId('addButton');
    act(() => fireEvent.changeText(inputNewTask, data.title));
    await act(async () => {
      await fireEvent.press(button);
    });
    expect(result.current.tasks).toBeTruthy();
  });
});
