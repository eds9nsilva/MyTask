import {render} from '@testing-library/react-native';
import React from 'react';
import App from '../App';

it('renders correctly', () => {
  const {debug} = render(<App />);
  debug();
});
