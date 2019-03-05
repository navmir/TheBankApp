import React, { Component } from 'react'
import RegisterView from './RegisterView'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            ssn: "",
            email: "",
            phone: "",
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
            return <div>NAAH SON</div>
        } else {
            return <RegisterView
                name={this.state.name}
                ssn={this.state.ssn}
                email={this.state.email}
                phone={this.state.phone}
                showPassword={this.state.showPassword}
                updateValue={this.handleChange}
                onClickShowPassword={this.handleClickShowPassword}
                onClick={this.saveInput} />
        }
    }
}