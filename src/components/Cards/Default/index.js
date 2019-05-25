import React, { Component } from 'react';

class CardDefault extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  componentDidMount() {
    this.setState({ title: this.props.title ? this.props.title : 'Default Card Example' });
  }

  render() {
    return (
      <div className="card mb-4">
        <div className="card-header">
          {this.state.title}
        </div>
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CardDefault;