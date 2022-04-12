import React from 'react';
import {TaskProvider} from './src/context/TaskContext';
import SplaschScreen from 'react-native-splash-screen';
import {Home} from './src/pages/Home/index';
const App = () => {
  React.useEffect(() => {
    SplaschScreen.hide();
  });
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
};

export default App;
