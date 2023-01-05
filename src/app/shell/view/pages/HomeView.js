import React from "react";
import Header from "../layout/header/Header";
import TabContent from "../layout/tabContent/TabContent";
import classes from "./Homeview.module.css";

const HomeView = props => {

    return <div className={classes.Body}>
        <Header/>
        <TabContent/>
    </div>
}

export default HomeView;