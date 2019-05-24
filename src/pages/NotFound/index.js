import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div id="content">
                <div className="container-fluid">
                    {/* <!-- 404 Error Text --> */}
                    <div className="text-center">
                        <div className="error mx-auto" data-text="404">404</div>
                        <p className="lead text-gray-800 mb-5">Page Not Found</p>
                        <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                        <Link to="/">&larr; Back to main</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NotFound);