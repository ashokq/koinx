import React, { useState } from 'react';

const AlsoLike = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const coins = [
    { name: 'BNB', price: '$319.34', change: '+0.52%', trend: 'up' },
    { name: 'SOL', price: '$109.33', change: '-2.89%', trend: 'down' },
    { name: 'XRP', price: '$0.634810', change: '+0.78%', trend: 'up' },
    { name: 'ADA', price: '$0.614869', change: '-1.57%', trend: 'down' },
    { name: 'AVAX', price: '$41.05', change: '-3.78%', trend: 'down' },
    { name: 'BNB', price: '$319.34', change: '+0.52%', trend: 'up' },
    { name: 'SOL', price: '$109.33', change: '-2.89%', trend: 'down' },
    { name: 'XRP', price: '$0.634810', change: '+0.78%', trend: 'up' },
    { name: 'ADA', price: '$0.614869', change: '-1.57%', trend: 'down' },
    { name: 'AVAX', price: '$41.05', change: '-3.78%', trend: 'down' },
  ];

  const trendingCoins = [
    { name: 'BTC', price: '$45,332.83', change: '+0.10%', trend: 'up' },
    { name: 'ETH', price: '$2,375.15', change: '-0.21%', trend: 'down' },
    { name: 'stETH', price: '$2,371.72', change: '-0.34%', trend: 'down' },
    { name: 'UNI', price: '$7.3192', change: '-4.02%', trend: 'down' },
    { name: 'CFG', price: '$0.773600', change: '-1.76%', trend: 'up' },
    { name: 'BTC', price: '$45,332.83', change: '+0.10%', trend: 'up' },
    { name: 'ETH', price: '$2,375.15', change: '-0.21%', trend: 'down' },
    { name: 'stETH', price: '$2,371.72', change: '-0.34%', trend: 'down' },
    { name: 'UNI', price: '$7.3192', change: '-4.02%', trend: 'down' },
    { name: 'CFG', price: '$0.773600', change: '-1.76%', trend: 'up' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? coins.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === coins.length - 1 ? 0 : prevIndex + 1
    );
  };

  const styles = {
    alsoLike: {
    padding: '20px',
    //   maxWidth: '1200px',
      margin: 'auto',
      backgroundColor: '#f8f9fa',
    },
    sectionTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    slider: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    sliderButton: {
      backgroundColor: '#e0e0e0',
      border: 'none',
      padding: '10px',
      cursor: 'pointer',
      borderRadius: '50%',
      fontSize: '18px',
    },
    coinsContainer: {
      display: 'flex',
      overflow: 'hidden',
      width: '100%',
      padding: '10px',
    },
    coin: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      width: '200px',
      minWidth: '200px',
      height: '200px',
      boxSizing: 'border-box',
      transition: 'transform 0.3s ease-in-out',
      marginRight: '10px',
      position: 'relative',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    coinHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    coinName: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    coinChange: {
      fontSize: '12px',
      marginTop: '5px',
    },
    coinChangeUp: {
      color: '#28A745',
    },
    coinChangeDown: {
      color: '#DC3545',
    },
    coinPrice: {
      fontSize: '24px',
      margin: '10px 0',
    },
    coinTrend: {
      height: '50px',
      backgroundSize: 'cover',
      position: 'absolute',
      bottom: '10px',
      left: '10px',
      right: '10px',
    },
    coinTrendUp: {
      backgroundImage: "url('path-to-up-trend-image')",
    },
    coinTrendDown: {
      backgroundImage: "url('path-to-down-trend-image')",
    },
  };

  return (
    <div style={styles.alsoLike}>
      <h2 style={styles.sectionTitle}>You May Also Like</h2>
      <div style={styles.slider}>
        <button style={styles.sliderButton} onClick={handlePrev}>
          {'<'}
        </button>
        <div style={styles.coinsContainer}>
          {coins.map((coin, index) => (
            <div
              key={index}
              style={styles.coin}
            >
              <div style={styles.coinHeader}>
                <span style={styles.coinName}>{coin.name}</span>
                <span style={coin.trend === 'up' ? styles.coinChangeUp : styles.coinChangeDown}>
                  {coin.change}
                </span>
              </div>
              <div style={styles.coinPrice}>{coin.price}</div>
              <div style={coin.trend === 'up' ? styles.coinTrendUp : styles.coinTrendDown}></div>
            </div>
          ))}
        </div>
        <button style={styles.sliderButton} onClick={handleNext}>
          {'>'}
        </button>
      </div>
      <h2 style={styles.sectionTitle}>Trending Coins</h2>
      <div style={styles.slider}>
        <button style={styles.sliderButton} onClick={handlePrev}>
          {'<'}
        </button>
        <div style={styles.coinsContainer}>
          {trendingCoins.map((coin, index) => (
            <div
              key={index}
              style={styles.coin}
            >
              <div style={styles.coinHeader}>
                <span style={styles.coinName}>{coin.name}</span>
                <span style={coin.trend === 'up' ? styles.coinChangeUp : styles.coinChangeDown}>
                  {coin.change}
                </span>
              </div>
              <div style={styles.coinPrice}>{coin.price}</div>
              <div style={coin.trend === 'up' ? styles.coinTrendUp : styles.coinTrendDown}></div>
            </div>
          ))}
        </div>
        <button style={styles.sliderButton} onClick={handleNext}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default AlsoLike;