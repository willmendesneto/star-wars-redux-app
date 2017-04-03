import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Form from '../../../app/components/Form';

describe('Form component: Form', () => {
  it('should save values grabbed with captureValues in state()', () => {
    const form = shallow(<Form />);
    const instance = form.instance();
    instance.captureValues({ foo: 'bar' });
    instance.captureValues({ foo2: 'bar2' });
    expect(form.state('values')).to.be.deep.equal({ foo: 'bar', foo2: 'bar2' });
  });

  it('should remove blank or undefined values from state', () => {
    const form = shallow(<Form />);
    const instance = form.instance();
    instance.captureValues({ foo: 'bar', foo2: 'bar2' });
    instance.captureValues({ foo: undefined });
    expect(form.state('values')).to.be.deep.equal({ foo2: 'bar2' });
    instance.captureValues({ foo2: '' });
    expect(form.state('values')).to.be.deep.equal({});
  });

  it('should pass event parameters into "onSubmit" method', () => {
    const callback = sinon.spy();
    const form = shallow(<Form onSubmit={callback} />);
    const instance = form.instance();
    instance.captureValues({ foo: 'bar' });
    form.simulate('submit');
    expect(callback.calledWith(sinon.match.any, { foo: 'bar' })).to.eql(true);
  });
});
