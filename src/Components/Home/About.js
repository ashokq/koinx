import React,{useState,useEffect} from "react";

const AboutBitcoin = () => {

const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const containerStyle = {
      fontFamily: "Arial, sans-serif",
      marginTop: "20px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#fff",
    //   maxWidth: "800px",
    };
  
    const sectionStyle = {
      marginBottom: "20px",
    };
  
    const titleStyle = {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "10px",
    };
  
    const subtitleStyle = {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    };
  
    const paragraphStyle = {
      marginBottom: "10px",
      lineHeight: "1.6",
    };
  
    const cardContainerStyle = {
      display: isMobile?"block":"flex",
      gap: "20px",
      marginBottom: "20px",
    };
  
    const cardStyle = {
      flex: 1,
      padding: "20px",
      borderRadius: "8px",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    };
  
    const greenCardStyle = {
      ...cardStyle,
      background: "linear-gradient(to right, #11998e, #38ef7d)",
    };
  
    const redCardStyle = {
      ...cardStyle,
      background: "linear-gradient(to right, #f85032, #e73827)",
    };
  
    const buttonStyle = {
      marginTop: "10px",
      padding: "10px 20px",
      backgroundColor: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      alignSelf: "flex-start",
    };
  
    return (
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h2 style={titleStyle}>About Bitcoin</h2>
          <h3 style={subtitleStyle}>What is Bitcoin?</h3>
          <p style={paragraphStyle}>
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
            7-day all-time low of $16,394.75. BTC has a circulating supply of
            19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
  
        <div style={sectionStyle}>
          <h3 style={subtitleStyle}>Lorem ipsum dolor sit amet</h3>
          <p style={paragraphStyle}>
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
            tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
            at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
            scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p style={paragraphStyle}>
            Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
            vitae pellentesque auctor amet. Nunc sagittis libero adipiscing
            cursus felis pellentesque interdum.
          </p>
          <p style={paragraphStyle}>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis dui ac. Mi adipiscing semper scelerisque porttitor
            pulvinar nunc risus. Ullamcorper dui.
          </p>
        </div>
  
        <div style={cardContainerStyle}>
          <div style={greenCardStyle}>
            <div>
              <h4>Calculate your Profits</h4>
              <p>Check how</p>
            </div>
            <button style={buttonStyle}>Check Now →</button>
          </div>
          <div style={redCardStyle}>
            <div>
              <h4>Calculate your tax liability</h4>
              <p>Check how</p>
            </div>
            <button style={buttonStyle}>Check Now →</button>
          </div>
        </div>
  
        <div style={sectionStyle}>
          <p style={paragraphStyle}>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis dui ac. Mi adipiscing semper scelerisque porttitor
            pulvinar nunc risus. Ullamcorper dui.
          </p>
        </div>
      </div>
    );
  };
export default AboutBitcoin;  