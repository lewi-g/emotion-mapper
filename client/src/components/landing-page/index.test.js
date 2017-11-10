import React from 'react'
import {mount} from 'enzyme';
import LandingPage from './index.js'


describe('<LandingPage />', () => {
  it ('Renders without crashing', () => {
    mount(<LandingPage />);
  });
});