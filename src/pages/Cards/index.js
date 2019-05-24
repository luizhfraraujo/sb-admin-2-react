import React, { Component } from 'react';

//Cards
import CardInfo from '../../components/Cards/Info';
import CardDefault from '../../components/Cards/Default';
import CardBasic from '../../components/Cards/Basic';
import CardCollapse from '../../components/Cards/Collapse';
import CardDropdown from '../../components/Cards/Dropdown';

import PageHeading from '../../components/PageHeading';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

class Cards extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Topbar --> */}
                            <Topbar />
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                {/* <!-- Page Heading --> */}

                                <PageHeading title="Cards" />

                                {/* <!-- Content Row --> */}

                                <div className="row">
                                    <CardInfo title="Earnings (Monthly)"
                                        icon="calendar"
                                        color="primary"
                                        value="$40,000" />

                                    <CardInfo title="Earnings (Annual)"
                                        icon="calendar"
                                        color="success"
                                        value="215,000" />

                                    <CardInfo title="Tasks"
                                        icon="clipboard"
                                        color="info"
                                        value="50%" />

                                    <CardInfo title="Pending Requests"
                                        icon="comments"
                                        color="warning"
                                        value="18" />
                                </div>
                                <div className="row">
                                    <div class="col-lg-6">
                                        <CardDefault title="Card Default Example" />
                                    </div>
                                    <div class="col-lg-6">
                                        <CardDropdown  title="Card Dropdown Example"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="col-lg-6">
                                        <CardBasic  title="Card Basic Example"/>
                                    </div>
                                    <div class="col-lg-6">
                                        <CardCollapse  title="Card Collapse Example"/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Cards;