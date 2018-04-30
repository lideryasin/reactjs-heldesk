import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';


class Login extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            redirectToReferrer: false
        }
    }

    emailChange = (e) => {
        this.setState({ email: e.target.value })
    }
    passwordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    login = (e) => {
        if (this.state.email === "yasin") {
            this.setState({ redirectToReferrer: true });
        }
        else {
            alert("username Error")
        }

    }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/createExplanation'} />)
        }
        return (
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <form class="login100-form validate-form">
                            <span class="login100-form-logo">
                                <i class="zmdi zmdi-landscape"></i>
                            </span>
                            <span class="login100-form-title p-b-34 p-t-27">
                                Log in
                        </span>

                            <div class="wrap-input100 validate-input" data-validate="Enter username">
                                <input class="input100" type="text" name="username" placeholder="Username" 
                                onChange={this.emailChange}
                                />
                                <span class="focus-input100" data-placeholder="&#xf207;"></span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Enter password">
                                <input class="input100" type="password" name="pass" placeholder="Password" 
                                onChange={this.passwordChange}
                                />
                                <span class="focus-input100" data-placeholder="&#xf191;"></span>
                            </div>

                            <div class="contact100-form-checkbox">
                                <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                <label class="label-checkbox100" for="ckb1">
                                    Remember me
                            </label>
                            </div>

                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn"
                                onClick={this.login}
                                >
                                    Login
                            </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;