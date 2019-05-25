import React, { Component } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartDonut from '../../components/Charts/Donut';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';

class Dashboard extends Component {
  componentWillMount() {
    document.getElementById('body').className = 'page-top'
  }

  render() {
    return (
      <div>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">

          {/* <!-- Sidebar --> */}
          <Sidebar />
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              {/* <!-- Topbar --> */}
              <Topbar />
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">

                {/* <!-- Page Heading --> */}

                <PageHeading title="Dashboard" />

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
                  <div className="col-xl-8 col-lg-6">
                    <ChartLine />
                  </div>
                  <div className="col-xl-4 col-lg-6">
                    <ChartDonut />
                  </div>

                </div>

              </div>
              {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2019</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a></div>
    )
  }
}

export default Dashboard;