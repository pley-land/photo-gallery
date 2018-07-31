import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoGallery from './photogallery';
import sinon from 'sinon';

const $ = require('jquery');

Enzyme.configure({ adapter: new Adapter() });
describe('PhotoGallery Test Suite', () => {
  it('PhotoGallery has 3 photo elements', () => {
    expect(mount(<PhotoGallery />).find('.photo')).toHaveLength(3);
  });

  it('PhotoGallery handles click', () => {
    const e = {
      type: 'click',
      timeStamp: 1532753006757,
      jQuery33103509413025485584: true,
    };
    const wrapper = shallow(<PhotoGallery />);
    wrapper.instance().onClickHandler(e);
  });

  it('PhotoGallery enlarges picture', () => {
    const e = {
      type: 'click',
      timeStamp: 1532753006757,
      jQuery33103509413025485584: true,
      target: document.createElement('div'),
    };
    const wrapper = shallow(<PhotoGallery />);
    wrapper.instance().enlargePicture(e);
  });

  it('PhotoGallery shrinks picture', () => {
    const wrapper = shallow(<PhotoGallery />);
    wrapper.instance().shrinkPicture();
  });
});
