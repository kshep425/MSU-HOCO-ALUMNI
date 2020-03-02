import React, { Component } from 'react'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <form className="login" action="/api/login" method="post">
                    <label for="username">Username</label>
                    <input id="username" autocomplete="username" type="text"></input>
                    <label for="password">Password</label>
                    <input id="password" autocomplete="password" type="password"></input>
                    <button type="button" class="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

export default App;