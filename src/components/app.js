import React from "react";
import WelcomeMessage from "./welcome-message"

function App() {
    return (
        <main>
            <h1> My First react app!</h1>
            <WelcomeMessage greeting="howdy" name="Raphy"></WelcomeMessage>
            <WelcomeMessage greeting="Good morning"name="Class"></WelcomeMessage>

        </main>
        
    );
}

export default App;