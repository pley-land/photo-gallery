import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoGallery from './photogallery';


Enzyme.configure({ adapter: new Adapter() });

describe('<PhotoGallery />', () => {
  test('render PhotoGallery', () => {
    const wrapper = shallow(
      <PhotoGallery />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
