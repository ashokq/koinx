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
      justifyContent:'space-between'
      // marginBottom: "20px",
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
      // ...cardStyle,
      padding: "10px",
      borderRadius: "8px",
      color: "#fff",
      display: "flex",
      gap:'5%',
      width:isMobile?"":"45%",
      flexDirection:'row',
      background: "linear-gradient(to right, #11998e, #38ef7d)",
    };
  
    const redCardStyle = {
      padding: "10px",
      borderRadius: "8px",
      color: "#fff",
      display: "flex",
      gap:'5%',
      width:isMobile?"":"45%",
      flexDirection:'row',
      marginTop:isMobile?"10px":"",
      background: "linear-gradient(to right, #f85032, #e73827)",
    };
  
    const buttonStyle = {
      // marginTop: "2px",
      padding: "10px 20px",
      backgroundColor: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      alignSelf: "flex-start",
    };

    const imageStyle = {
      width: isMobile?"119px":"128px",
      height: "128px",
      borderRadius:'6px',
      objectFit: "cover",
    };

    const cardFont={
      fontSize:'20px',
      fontWeight:600,

    }
  
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
        <hr></hr>
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
  <hr></hr>
  <h2 style={titleStyle}>Already Holding Bitcoin?</h2>
        <div style={cardContainerStyle}>
          <div style={greenCardStyle}>
          <img src="https://s3-alpha-sig.figma.com/img/4a59/7cf5/e39cee97d83ba894aa0c105133924b9b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BIpcdewbeHvpF0MrAHY9Lvoj0pca~n77kDxgd55mI~LL6DhUVkQkiHr5pBEMM7AtTgJ3r50AD5rDtCXdoDGT56v03G1oM0r4wyjQQsqlRn7plrafv4xMISOsNszaNThUXSJrUlWt~XLXr7r86YIkB5PwI3lVDyklbGy~48E2qc86bk25uWBfyp2yk-BGZORYlvmG4DNJRnQ8qtcIJ8nj1kxPzIKT4O676Cdkfd09WRDGFQLhBevRjdipHN7UW6y1LZz651u9k7qWHX-nCLWNBhpwzx4i0aH4FddzREaKCwnmK~DAkruz1qAfUnsFZLCClIobUtEFP58DdJkB8Iyc1A__" alt="green" style={imageStyle} />
            <div>
              <p style={cardFont}>Calculate your <br></br>Profits</p>
              <button style={buttonStyle}>Check Now →</button>
            </div>
            
          </div>
          <div style={redCardStyle}>
          <img src="https://s3-alpha-sig.figma.com/img/b324/e6e3/5c577ca47c764bd8af01d840fe7ffccb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4l6utWlIkrTQzqt77v9j0~gF~vbeJRrczq6KNeIyXwZT~GK~Lf~qi4wM95eBzMG3moI5HEb268uf2MKQuKUD6wweZBgLLHTk6QZsDSs8nG7Nz7CiR-h5Iw79zDhEU19rKCbLW~hJ1zjAjS0~-knfUlYgUq6TKJUUkaU0x3gNR0JFYjAUFYU5mGq~tfgaFpijbiNjl5z4AC4OllIoyuSrVGxTQu6~FX2-Fuzr8K3235R65bN7rlrzduhg6fIoYkkdy4zWD2~fnmekMZ5soQX0Vk~S3eDEs8YmPn5A6xFzi~MiO53Xe2K6bBVVtGA-eY-urXUeeYJHhrTlxAmvlSIyA__" alt="green" style={imageStyle} />
            <div>
              <p style={cardFont}>Calculate your tax <br></br>liability</p>
              <button style={buttonStyle}>Check Now →</button>
            </div>
            
          </div>
        </div>
  <hr></hr>
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