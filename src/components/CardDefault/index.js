import React, { Component } from 'react';

class CardDefault extends Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-header">
                  Default Card Example
                </div>
                <div className="card-body">
                  This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
                </div>
              </div>
        )
    }
}

export default CardDefault;