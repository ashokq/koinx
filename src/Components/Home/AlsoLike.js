import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dataYouMayLike = [
  { name: "BNB", price: "$319.34", change: "+0.52%", color: "green" },
  { name: "SOL", price: "$109.33", change: "-2.89%", color: "red" },
  { name: "XRP", price: "$0.634810", change: "+0.78%", color: "green" },
  { name: "ADA", price: "$0.614869", change: "-1.57%", color: "red" },
  { name: "AVAX", price: "$41.05", change: "-3.78%", color: "red" },
];

const dataTrendingCoins = [
  { name: "BTC", price: "$45,332.83", change: "+0.10%", color: "green" },
  { name: "ETH", price: "$2,375.15", change: "-0.21%", color: "red" },
  { name: "stETH", price: "$2,371.72", change: "-0.34%", color: "red" },
  { name: "UNI", price: "$7.3192", change: "-4.02%", color: "red" },
  { name: "CFG", price: "$0.773600", change: "-1.76%", color: "red" },
];

const AlsoLike = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardStyle = {
    background: "#fff",
    border: "1px solid black",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontWeight: "bold",
  };

  const priceStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const containerStyle = {
    padding: "2%",
    backgroundColor:"#FFFFFF",
    marginTop:"1%",
    marginBottom:'1%'
    // width:'100%',
  };

  const headingStyle = {
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>You May Also Like</h2>
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>

      <h2 style={headingStyle}>Trending Coins</h2>
      <Slider {...settings}>
        {dataTrendingCoins.map((coin, index) => (
          <div key={index} style={cardStyle}>
            <div style={headerStyle}>
              <span>{coin.name}</span>
              <span style={{ color: coin.color === "green" ? "green" : "red" }}>
                {coin.change}
              </span>
            </div>
            <div style={priceStyle}>{coin.price}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlsoLike;
