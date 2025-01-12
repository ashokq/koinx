import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      style={{
        display: "block",
        background: "#ddd",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        right: "-25px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        
      }}
      onClick={onClick}
    >
    &gt;
    </div>
  );
};

// Custom Prev Arrow
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      style={{
        display: "block",
        background: "#ddd",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        left: "-25px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

function Responsive() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container" style={{ margin: "50px",border:'1px solid black' }}>
      <Slider {...settings}>
        <div style={{border:'1px solid black',backgroundColor:'red'}}>
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
      </Slider>
    </div>
  );
}

export default Responsive;
