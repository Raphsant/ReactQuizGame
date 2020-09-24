import React from "react";

function WelcomeMessage(props){
    const {greeting, name} = props;
    
    return(
    <p className="welcome-message">
        {props.greeting}, {props.name}!
    </p>
    
    );
}

export default WelcomeMessage;