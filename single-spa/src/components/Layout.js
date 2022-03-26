import React from "react";
import Navigation from "./Navigation";
import Main from "./Main";

const Layout = (props) => {
    const setOfValues = {
        dog: 'Ricky',
        catOne: 'Mila',
        catTwo: 'Cleopatra',
        catThree: 'Nina'
    }
    props.funct(setOfValues);
    return(
        <div>
            <Navigation />
            <Main />
        </div>
    );
}

export default Layout;