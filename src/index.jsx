import React from "react"
import ReactDOM from "react-dom"
import SimpleChart from "./simpleChart"

class MyAppWithState extends React.Component{
    constructor(props){
        super(props);
        this.chState = this.changeState.bind(this);
        this.state = {
            clickedCount: 0,
            buttonDescription: this.props.description.above
        };
    }
    
    changeState(){
        this.setState({
            clickedCount: this.state.clickedCount + 1,
            buttonDescription: `clicked ${this.state.clickedCount + 1} time(s).`
        });
    }
    
    
    render(){
        console.log(this.props.inside);
        return (
            <div>
                <p>{this.state.buttonDescription}</p>
                <input type="button" onClick={this.chState} value={this.props.description.inside} />
            </div>
        );
    }
}

function MyApp(props){
    console.log(props);
    const styles = {
        color: "red",
        backgroundColor: "green"
    }
    styles.fontSize = 20;
    styles.color = "blue";
    return (
        <p style={styles}>
            {props.data.paragraph}
        </p>
    )
}

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