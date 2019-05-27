import React from "react"

function MyApp(props){
    console.log(props);
    
    const apiRes = fetch("https://facebook.github.io/react-native/movies.json");
    
    console.log(apiRes);
    
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

export default MyApp