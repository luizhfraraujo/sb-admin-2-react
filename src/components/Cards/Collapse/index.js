import React, { Component } from 'react';

class CardCollapse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    componentDidMount() {
        this.setState({ title: this.props.title ? this.props.title : 'Basic Card Example' });
    this.setState({ body: this.props.body ? this.props.body : "This is a collapsable card example using Bootstrap's built in collapse functionality. <strong>Click on the card header</strong> to see the card body collapse and expand!" })
    }
    render() {
        return (
            <div className="card shadow mb-4">
                {/* <!-- Card Header - Accordion --> */}
                <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                    <h6 className="m-0 font-weight-bold text-primary">{this.state.title}</h6>
                </a>
                {/* <!-- Card Content - Collapse --> */}
                <div className="collapse show" id="collapseCardExample">
                    <div className="card-body">
                        {this.props.children}
                  </div>
                </div>
            </div>
        )
    }
}

export default CardCollapse;