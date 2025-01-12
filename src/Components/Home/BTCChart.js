import React, { useEffect, useState } from "react";
import axios from "axios";

const BTCChart = () => {
  const [btcData, setBtcData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchBTCData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "inr,usd",
              include_24hr_change: "true",
            },
            headers: {
              "X-CG-Pro-API-Key": "CG-7HTPwM11HviRXZZv4qHbfNa8",
            },
          }
        );
        setBtcData(response.data.bitcoin);
      } catch (error) {
        console.error("Error fetching BTC data:", error);
      }
    };

    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrendingCoins(response.data.coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchBTCData();
    fetchTrendingCoins();
  }, []);

  return (
    <div style={styles.card}>
      <h1 style={styles.title}>Bitcoin (BTC)</h1>
      {btcData && (
        <>
          <p style={styles.description}>
            Current Price: ${btcData.usd} / ₹{btcData.inr}
          </p>
          <p style={styles.description}>
            24H Change: {btcData.usd_24h_change.toFixed(2)}%
          </p>
        </>
      )}
      <div style={styles.imageContainer}>
        <iframe
          src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_12345&symbol=BITSTAMP%3ABTCUSD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=Light&style=1&timezone=Etc%2FUTC&withdateranges=1&hideideas=1&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en&utm_source=coinmarketcap.com&utm_medium=widget&utm_campaign=chart&utm_term=BITSTAMP%3ABTCUSD"
          width="100%"
          height="400"
          frameBorder="0"
          allowTransparency="true"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#FFFFFF", 
    color: "#333",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
   
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "20px 0",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "20px",
  },
  imageContainer: {
    margin: "20px 0",
  },
  image: {
    width: "100%",
    height: "auto",
    maxWidth: "200px",
  },
  trendingCoin: {
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    width: "150px",
  },
};

export default BTCChart;