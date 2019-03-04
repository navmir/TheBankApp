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
            isSubmitted: false
        };
    }

    updateName = event => {
        this.setState({ name: event.target.value });
        console.log(this.state);
    }

    updateSSN = event => {
        this.setState({ age: event.target.value });
        console.log(this.state);
    }

    updateEmail = event => {
        this.setState({ amount: event.target.value });
        console.log(this.state);
    }

    updatePhone = event => {
        this.setState({ duration: event.target.value });
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
                nameChanged={this.updateName}
                ssnChanged={this.updateSSN}
                emailChanged={this.updateEmail}
                phoneChanged={this.updatePhone}
                onClick={this.saveInput} />
        }
    }
}