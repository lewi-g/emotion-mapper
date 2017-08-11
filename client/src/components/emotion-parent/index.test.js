import React from 'react';

import { shallow } from 'enzyme';
import EmotionParent from './index.js';

describe('EmotionParent', () => {
  it('renders without crashing', () => {
    shallow(<EmotionParent />);
  });
});
