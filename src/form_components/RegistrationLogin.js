import React, { Component } from 'react'

class RegistrationLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h5>Login Info</h5>
                <label for="username">Username</label>
                <input id="username" autocomplete="username" type="text"></input>
                <label for="password">Password</label>
                <input id="password" autocomplete="password" type="password"></input>
                <label for="password">Password</label>
                <input id="password" autocomplete="password" type="password"></input>
            </div>
        )
    }
}

export default RegistrationLogin;