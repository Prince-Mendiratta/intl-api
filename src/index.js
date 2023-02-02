import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import IntlPolyfill from "intl";
import "intl/locale-data/jsonp/en.js";

Intl.NumberFormat = IntlPolyfill.NumberFormat;

function App() {
    return (
        <div className="App">
            <h1>React Format Intl API</h1>

            <p
                style={{
                    paddingBottom: "20px",
                    marginBottom: "20px",
                    borderBottom: "1px solid #ddd"
                }}
            >
                <em>
                    This is a sample app to test the currency format using the Intl API in javascript. You can get the public link for this
                    sandbox in the browser by opening it in codesandbox and checking the URL bar.
                </em>
            </p>

            <p>
                The currency used for testing and which shows the difference is XAF. On a desktop browser, it should show the 
                currency symbol, that is, FCFA.
            </p>

            <p>
                If the public link is opened on a mobile browser however, the locale data does not have the currency symbol
                for XAF and should show the currency name itself, thus the number would be in XAF.
            </p>

            <Test></Test>
        </div>
    );
}

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: this.getAmount()
        };
    }

    getAmount() {
        let x = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "XAF",
            maximumFractionDigits: 2
        }).format(69000);
        console.log(x);
        return x;
    }
    render() {
        return <div>{this.state.amount}</div>;
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
