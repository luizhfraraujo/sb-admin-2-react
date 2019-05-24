import React, { Component } from 'react';

class CardBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body:''
    }
  }

  componentDidMount() {
    this.setState({ title: this.props.title ? this.props.title : 'Basic Card Example' });
    this.setState({ body: this.props.body ? this.props.body : "The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!" })
  }

  render() {

    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">{this.state.title}</h6>
        </div>
        <div className="card-body">
          {this.state.body}
          </div>
      </div>
    )
  }
}

export default CardBasic;