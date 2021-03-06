import {render} from '@testing-library/react-native';
import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {TaskProvider, useTaskList} from '../../src/context/TaskContext';
import {TaskList} from '../../src/componets';

describe('TaskList component', () => {
  it('verifica se um item é removido da lista de tarefas', async () => {
    render(<TaskList />, {
      wrapper: TaskProvider,
    });
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TaskProvider,
    });
    const data = {id: 'Task01', title: 'Task01'};
    await act(() => result.current.addTask(data));
    expect(result.current.tasks[0].title).toEqual('Task01');
    await act(() => result.current.removeTask('Task01'));
    expect(result.current.tasks.length).toEqual(0);
  });
});
