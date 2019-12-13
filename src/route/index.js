import React, { Component } from 'react'

import Header from "../components/Header";
import Allnotes from "./Allnotes";

class MainApp extends Component {
    render() {
        return (
            <div>
                <Header />
                <hr />
                this is AllNote Page
                     < Allnotes />
            </div>
        )
    }
}

export default MainApp;