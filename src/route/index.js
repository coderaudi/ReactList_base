import React, { Component } from 'react'

import Header from "../components/Header";
import Allnotes from "./Allnotes";

class MainApp extends Component {
    render() {
        return (
            <div>
                 <Header />
                 <Allnotes />
            </div>
        )
    }
}

export default MainApp;