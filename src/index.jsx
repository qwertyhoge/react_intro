import React from "react"
import ReactDOM from "react-dom"
import MyApp from "./MyApp"
import MyAppWithState from "./MyAppWithState"
import SimpleChart from "./simpleChart"


ReactDOM.render(
    <div>
        <MyApp
            data={{paragraph: "a paragraph through props"}}
        />
        <MyAppWithState 
            description={{above: "this is a button", inside: "click!"}}
        />
    </div>,
    document.getElementById("destination")
);
SimpleChart("chart-container");