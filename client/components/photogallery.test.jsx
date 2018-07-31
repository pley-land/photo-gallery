import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import PhotoGallery from './photogallery';

Enzyme.configure({ adapter: new Adapter() });
describe('PhotoGallery Test Suite', () => {
  it('PhotoGallery renders correctly', () => {
    const tree = renderer
      .create(<PhotoGallery />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

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
    expect(wrapper.instance().state.isOpen).toEqual(false);
    wrapper.instance().onClickHandler(e);
    expect(wrapper.instance().state.isOpen).toEqual(true);
  });

  it('check state', () => {
    const wrapper = shallow(<PhotoGallery />);
    expect(wrapper.find('#img1').exists).toBeTruthy();
    expect(wrapper.find('#img2').exists).toBeTruthy();
    expect(wrapper.find('#img3').exists).toBeTruthy();

    // Testing Initial State
    // console.log(wrapper.find('#img1'));
    // .simulate('onMouseEnter');
    // Testing state after mouseleave

    // Testing state after mouseover
    const wrap = mount(<PhotoGallery />);
    expect(wrap).toMatchSnapshot();
  });
});
