import React from "react"
import ReactDOM from "react-dom"
import SimpleChart from "./simpleChart"

function MyApp(){
    const styles = {
        color: "red",
        backgroundColor: "green"
    }
    styles.fontSize = 20;
    styles.color = "blue";
    return (
        <p style={styles}>
            paragraph
        </p>
    )
}

ReactDOM.render(<MyApp/>, document.getElementById("destination"));
SimpleChart("chart-container");