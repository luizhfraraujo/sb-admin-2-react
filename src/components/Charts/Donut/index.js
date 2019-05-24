import React, { Component } from 'react';

class ChartDonut extends Component {
    render() {
        return (
            <div className="card shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                </div>
                {/* <!-- Card Body --> */}
                <div className="card-body">
                    <div className="chart-pie pt-4">
                        <canvas id="myPieChart"></canvas>
                    </div>
                    <hr />
                    Styling for the donut chart can be found in the <code>/js/demo/chart-pie-demo.js</code> file.
                </div>
            </div>
        )
    }
}

export default ChartDonut;