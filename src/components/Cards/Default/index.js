import React, { Component } from 'react';

class CardDefault extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  componentDidMount() {
    this.setState({ title: this.props.title ? this.props.title : 'Default Card Example' });
    this.setState({ body: this.props.body ? this.props.body : "This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example." })
  }

  render() {
    return (
      <div className="card mb-4">
        <div className="card-header">
          {this.state.title}
        </div>
        <div className="card-body">
          {this.state.body}
        </div>
      </div>
    )
  }
}

export default CardDefault;