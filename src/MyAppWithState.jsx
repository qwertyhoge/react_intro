import React from "react"

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
        return (
            <div>
                <p>{this.state.buttonDescription}</p>
                <input type="button" onClick={this.chState} value={this.props.description.inside} />
            </div>
        );
    }
}

export default MyAppWithState
