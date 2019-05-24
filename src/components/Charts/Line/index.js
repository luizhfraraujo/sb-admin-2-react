import React, { Component } from 'react';
import Chart from "chart.js";

class ChartLine extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                        fill: false,
                        borderColor: "#98B9AB"
                    },
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }

    render() {
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                </div>
                <div className="card-body">
                    <div className="chart-area">
                        <canvas id="myAreaChart" ref={this.chartRef}></canvas>
                    </div>
                    <hr />
                    Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js</code> file.
                </div>
            </div>
        )
    }
}

export default ChartLine;