import React,{useState,useEffect} from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <span style={styles.logoText}>Koin</span>
        <span style={styles.logoAccent}>X</span>
        <sup>™</sup>
      </div>
      {isMobile?
      <div>
         <button>
        <div style={styles.hamburger}></div>
        <div style={styles.hamburger}></div>
        <div style={styles.hamburger}></div>
      </button>
      </div>
      :
      <div style={styles.navDiv}>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>Crypto Taxes</li>
        <li style={styles.navItem}>Free Tools</li>
        <li style={styles.navItem}>Resource Center</li>
      </ul>
      <button style={styles.getStartedButton}>Get Started</button>
      </div>}
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding:"1%",
    width:"98%",
    backgroundColor: "white",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },
  logoText: {
    color: "#0056E0", // Blue color for "Koin"
  },
  logoAccent: {
    color: "#FFA500", // Orange color for "X"
  },
  navLinks: {
    display: "flex",
    listStyleType: "none",
    gap: "30px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: "#0F1629",
    fontSize: "16px",
    fontWeight:600,
    cursor: "pointer",
  },
  getStartedButton: {
    // backgroundColor: "#0056E0",
    background: "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)",
    color:"white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight:600,
    cursor: "pointer",
  },
  navDiv:{
    // marginRight:"0px",
    display:"flex",
    alignItems:'center',
    gap:"30px"
  },
  navDivMobile:{
    display:'none'
  },
  hamburger: {
    width: "20px",
    height: "2px",
    backgroundColor: "black",
    margin: "4px 0"
  }
  // "@media (max-width: 768px)": {
  //   navDiv: {
  //     display: "none",
  //   },
  //   hamburgerMenu: {
  //     display: "flex",
  //   },
  //   navLinks: {
  //     flexDirection: "column",
  //     gap: "10px",
  //   },
  // },
};

export default Navbar;
