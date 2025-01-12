import React from "react";

const BTCChart = () => {
  return (
    <div style={styles.card}>
     
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#FFFFFF", // Blue background
    color: "#fff",
    borderRadius: "15px",
    padding: "20px",
   
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
    height:"500px"
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "20px 0",
  },
  highlight: {
    color: "#FFD700", // Golden color for "KoinX"
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
  button: {
    backgroundColor: "#fff",
    color: "#0056E0",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    gap: "5px",
  },
  arrow: {
    fontSize: "18px",
  },
};

export default BTCChart;
