import React from "react";
import Card from "./Card";
import BTCChart from "./BTCChart";
import TrendingCoins from "./coinsCard";
import TaskTabs from "./tabsContent";

const Home = () =>{
    return(
        <div style={styles.mainDiv}>
           <div style={styles.leftDiv}>
             <BTCChart/>
             <TaskTabs/>
           </div>
           <div style={styles.rightDiv}>
             <Card/>
             <TrendingCoins/>
           </div>
        </div>
    )
};

const styles = {
    mainDiv:{
        // border:"1px solid black",
        margin:"45px",
        display:"flex",
        gap:"20px",
        padding:"0px"
    },
    leftDiv:{
        
        width:"70%",
        padding:"0px"
    },
    rightDiv:{
        width:"30%",
        padding:'0px',
        margin:'0px'
    }
}

export default Home;