import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';



class SignIn extends Component {
    componentWillMount(){
        document.getElementById('body').className='bg-gradient-primary'
      }

      handleSignIn = () => {
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div className="container">
            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">
        
              <div className="col-xl-10 col-lg-12 col-md-9">
        
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                          </div>
                          <form onSubmit={this.handleSignIn} className="user">
                            <div className="form-group">
                              <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                <label className="custom-control-label" for="customCheck">Remember Me</label>
                              </div>
                            </div>
                            <button  type="submit" className="btn btn-primary btn-user btn-block">
                              Login
                            </button>
                            <hr/>
                            <a href="index.html" className="btn btn-google btn-user btn-block">
                              <i className="fab fa-google fa-fw"></i> Login with Google
                            </a>
                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                              <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                            </a>
                          </form>
                          <hr/>
                          <div className="text-center">
                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                          </div>
                          <div className="text-center">
                            <Link className="small" to="/signup">Create an Account!</Link>
                          </div>
                        </div>
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

export default withRouter(SignIn);