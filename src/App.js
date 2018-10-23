import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux"
import Main from "./pages/main";
import store from "./state/store"



class App extends Component {
    render() {
        return (
			<Provider store={store()}>
				<div className="App">
					<CssBaseline />
					<Main />
				</div>
			</Provider>
        );
    }
}

export default App;
