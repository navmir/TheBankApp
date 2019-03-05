import React, { Component } from 'react'
import LoginView from './LoginView'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ssn: "",
            password: "",
            isSubmitted: false,
            showPassword: false,
        };
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
        console.log(this.state);
    }

    saveInput = () => {
        this.setState({ isSubmitted: true });
        console.log(this.state);
    }


    render() {
        if (this.state.isSubmitted) {
            return <div>VEE</div>
        } else {
            return <LoginView
                ssn={this.state.ssn}
                password={this.state.password}
                showPassword={this.state.showPassword}
                onClick={this.saveInput}
                onClickShowPassword={this.handleClickShowPassword}
                updateValue={this.handleChange} />
        }
    }
}