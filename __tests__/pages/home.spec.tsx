import {render} from '@testing-library/react-native';
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
  it('verifica a insercaoa na lista de tarefa', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TaskProvider,
    });
    const data = {id: 'Task01', title: 'Task01'};

    await act(() => result.current.addTask(data));
    expect(result.current.tasks).toBeTruthy();
  });
});
