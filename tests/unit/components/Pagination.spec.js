import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Pagination from '../../../app/components/StarWars/Pagination';

describe('StarWars Component: Pagination', () => {
  let wrapper, onPreviousClickCallback, onNextClickCallback;
  beforeEach(() => {
    onPreviousClickCallback = sinon.spy();
    onNextClickCallback = sinon.spy();
    wrapper = mount(<Pagination
                            onPreviousClick={onPreviousClickCallback}
                            isPreviousEnabled={false}
                            isNextEnabled={true}
                            onNextClick={onNextClickCallback} />);
  });

  it('should render buttons based in current state', () => {
    expect(wrapper.find('.btn-previous').html().includes('disabled=""')).to.eql(true);
    expect(wrapper.find('.btn-next').html().includes('disabled=""')).to.eql(false);
  });

  it('shoul call function if button is NOT disabled', () => {
    wrapper.find('.btn-next').simulate('click');
    expect(onNextClickCallback.called).to.eql(true);
  });

  it('shoul NOT call function if button is disabled', () => {
    wrapper.find('.btn-previous').simulate('click');
    expect(onNextClickCallback.called).to.eql(false);
  });
});
