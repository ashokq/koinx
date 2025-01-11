import React from "react";

const coins = [
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024",
    change: "+8.21%",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024",
    change: "+5.26%",
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    icon: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=024",
    change: "+4.32%",
  },
];

const TrendingCoins = () => {
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>Trending Coins (24h)</h2>
      <ul style={styles.coinList}>
        {coins.map((coin, index) => (
          <li style={styles.coinItem} key={index}>
            <div style={styles.coinInfo}>
              <img
                src={coin.icon}
                alt={`${coin.name} logo`}
                style={styles.coinIcon}
              />
              <span>
                {coin.name} ({coin.symbol})
              </span>
            </div>
            <span style={styles.coinChange}>{coin.change}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#ffffff", // White background
    borderRadius: "12px", // Rounded corners
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow
    maxWidth: "400px", // Limit the card width
    padding: "20px", // Space inside the card
    fontFamily: "Arial, sans-serif",
    margin: "20px auto",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1e2233", // Dark text
    marginBottom: "20px",
    textAlign: "left",
  },
  coinList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  coinItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #f1f1f1", // Divider
  },
  coinInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Space between image and text
  },
  coinIcon: {
    width: "32px",
    height: "32px",
    borderRadius: "50%", // Circular image
  },
  coinChange: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#16c784", // Green text
    backgroundColor: "#e6f4ea", // Light green background
    padding: "4px 8px", // Space around the text
    borderRadius: "8px", // Rounded edges
  },
};

export default TrendingCoins;
