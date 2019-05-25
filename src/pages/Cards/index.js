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
                                        <CardDefault title="Card Default Example">
                                            This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
    
                                        </CardDefault>
                                    </div>
                                    <div class="col-lg-6">
                                        <CardDropdown title="Card Dropdown Example">
                                            Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
    
                                        </CardDropdown>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="col-lg-6">
                                        <CardBasic title="Card Basic Example">
                                            The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
                                        </CardBasic>
                                    </div>
                                    <div class="col-lg-6">
                                        <CardCollapse title="Card Collapse Example">
                                            This is a collapsable card example using Bootstrap's built in collapse functionality. <strong>Click on the card header</strong> to see the card body collapse and expand!
                                        </CardCollapse>
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