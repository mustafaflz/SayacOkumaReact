import React from "react";
import HomeView from "./view/pages/HomeView";
import classes from "./Shell.module.css"

const Shell = props => {
    return <div className={classes.App}>
        <HomeView/>
    </div>
}

export default Shell;