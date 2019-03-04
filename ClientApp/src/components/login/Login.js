import React, { Component } from 'react'
import LoginView from './LoginView'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ssn: "",
            password: "",
            isSubmitted: false
        };
    }

    updateSSN = event => {
        this.setState({ ssn: event.target.value });
        console.log(this.state);
    }

    updatePassword = event => {
        this.setState({ password: event.target.value });
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
                ssnChanged={this.updateSSN}
                passwordChanged={this.updatePassword}
                onClick={this.saveInput} />
        }
    }
}