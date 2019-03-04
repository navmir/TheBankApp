import React, { Component } from 'react'
import ApplyLoanView, { AppliedLoanView } from './ApplyLoanView'

export default class ApplyLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            amount: "",
            duration: "",
            reason: "",
            isSubmitted: false
        };
    }

    updateName = event => {
        this.setState({ name: event.target.value });
        console.log(this.state);
    }

    updateAge = event => {
        this.setState({ age: event.target.value });
        console.log(this.state);
    }

    updateAmount = event => {
        this.setState({ amount: event.target.value });
        console.log(this.state);
    }

    updateDuration = event => {
        this.setState({ duration: event.target.value });
        console.log(this.state);
    }

    updateReason = event => {
        this.setState({ reason: event.target.value });
        console.log(this.state);
    }

    saveInput = () => {
        this.setState({ isSubmitted: true });
        console.log(this.state);
    }

    render() {
        if (this.state.isSubmitted) {
            return <AppliedLoanView />
        } else {
            return <ApplyLoanView
                name={this.state.name}
                age={this.state.age}
                amount={this.state.amount}
                duration={this.state.duration}
                reason={this.state.reason}
                nameChanged={this.updateName}
                ageChanged={this.updateAge}
                amountChanged={this.updateAmount}
                durationChanged={this.updateDuration}
                reasonChanged={this.updateReason}
                onClick={this.saveInput} />
        }
    }
}
