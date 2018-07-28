import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoGallery from './components/photogallery';


Enzyme.configure({ adapter: new Adapter() });

describe('<PhotoGallery />', () => {
  test('render PhotoGallery', () => {
    const wrapper = shallow(
      <PhotoGallery />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
