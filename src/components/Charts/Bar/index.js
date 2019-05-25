import React, { Component } from 'react';
import CardBasic from '../../Cards/Basic';

class ChartBar extends Component {
    render() {
        return (

            <CardBasic title="Bar Charts">
                <div className="chart-bar">
                    <canvas id="myBarChart"></canvas>
                </div>
                <hr />
                Styling for the bar chart can be found in the < code > /js/demo / chart - bar - demo.js</code > file.
                    </CardBasic>
        )
    }
}

export default ChartBar;