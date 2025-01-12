import React,{useState,useEffect} from "react";
import Card from "./Card";
import BTCChart from "./BTCChart";
import TrendingCoins from "./coinsCard";
import TaskTabs from "./tabsContent";
import PerformanceCard from "./PerformanceCard";
import Sentiment from "./SentimateCard";
import AboutBitcoin from "./About";
import Tokenomics from "./Takenomics";
import Team from "./Team";
import AlsoLike from "./AlsoLike";
import Responsive from "./Slider";

const Home = () =>{
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const styles = {
        mainDiv:{
            // border:"1px solid black",
            margin:"2%",
            display:"flex",
            gap:"20px",
            padding:"0px"
        },
        mainDivMobile:{
            // border:"1px solid black",
            margin:"2%",
            display:"block",
            gap:"20px",
            padding:"0px",
            width:"96%"
        },
        leftDiv:{
            
            width:isMobile?"100%":"70%",
            padding:"0px"
        },
        rightDiv:{
            width:isMobile?"100%":"30%",
            padding:'0px',
            marginTop:isMobile?"20px":'0px'
        }
    }
    return(
        <div style={isMobile?styles.mainDivMobile:styles.mainDiv}>
           <div style={styles.leftDiv}>
             <BTCChart/>
             <TaskTabs/>
             <PerformanceCard/> 
             <Sentiment/> 
              <AboutBitcoin/> 
              <Tokenomics/>
             <Team/>
             {/* <Responsive/> */}
             {/* <AlsoLike/> */}
           </div>
           <div style={styles.rightDiv}>
             <Card/>
             <TrendingCoins/>
           </div>
        </div>
    )
};



export default Home;