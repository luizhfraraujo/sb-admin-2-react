import React from 'react';
import PropTypes from "prop-types";

const LineChart = ({ value, title, icon='', color = 'card border-left-primary shadow h-100 py-2' }) => (
    
    <div className="col-xl-3 col-md-6 mb-4">
        <div className={color}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{title}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                    </div>
                    <div className="col-auto">
                        <i className={icon}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// LineChart.propTypes = {
//     value: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired
// };

export default LineChart;