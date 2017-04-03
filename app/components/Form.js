import React, { Component } from 'react';

function trimEmpty(object) {
  const trimmedObject = {};
  Object.keys(object).forEach(key => {
    if (object[key] !== undefined && object[key] !== '') {
      trimmedObject[key] = object[key];
    }
  });
  return trimmedObject;
}

export default class Form extends Component {

  static propTypes = {
    className: React.PropTypes.string,
    onSubmit: React.PropTypes.func,
    onChange: React.PropTypes.func,
    children: React.PropTypes.node
  };

  static childContextTypes = {
    captureValues: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = { values: {} };
    this.captureValues = this.captureValues.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getChildContext() {
    return {
      captureValues: this.captureValues
    };
  }

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state.values);
    }
  }

  captureValues(object) {
    const values = Object.assign({}, this.state.values, object);
    const newValues = trimEmpty(values);
    this.setState({ values: newValues });
  }

  onSubmit(event) {
    if (!!this.props.onSubmit) {
      this.props.onSubmit(event, this.state.values);
    }
  }

  render() {
    return (
      <form
        className={this.props.className || 'form'}
        onSubmit={this.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}
