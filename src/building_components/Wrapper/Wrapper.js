import React from "react";
import "./style.css";
import { Component } from 'react';

class Wrapper extends Component {
    render() {
        return (
            <main className="wrapper" {...this.props} />
        )
    }
}

export default Wrapper;
