import React,{useState,useEffect} from "react";

const Sentiment = () => {

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
    // maxWidth: "600px",
    backgroundColor: "#fff",
  };

  const sectionTitleStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const infoIconStyle = {
    fontSize: "12px",
    color: "#999",
    marginLeft: "5px",
    cursor: "pointer",
  };

  const keyEventsStyle = {
    marginBottom: "20px",
  };

  const eventCardsStyle = {
    display: isMobile?"block":"flex",
    gap: "10px",
  };

  const eventCardStyle = {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    color: "#fff",
  };

  const blueCardStyle = {
    ...eventCardStyle,
    backgroundColor: "#007bff",
  };

  const greenCardStyle = {
    ...eventCardStyle,
    backgroundColor: "#28a745",
  };

  const eventIconStyle = {
    fontSize: "24px",
  };

  const eventContentStyle = {
    flex: 1,
  };

  const analystEstimatesStyle = {
    marginBottom: "20px",
  };

  const estimateContentStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const circleStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#e6f9f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#28a745",
  };

  const estimateBarsStyle = {
    flex: 1,
  };

  const barStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  };

  const barLineStyle = {
    flex: 1,
    height: "8px",
    marginLeft: "10px",
    marginRight: "10px",
    borderRadius: "4px",
  };

  const buyBarStyle = {
    ...barLineStyle,
    backgroundColor: "#28a745",
  };

  const holdBarStyle = {
    ...barLineStyle,
    backgroundColor: "#ccc",
  };

  const sellBarStyle = {
    ...barLineStyle,
    backgroundColor: "#dc3545",
  };

  return (
    <div style={containerStyle}>
      <h2>Sentiment</h2>

      {/* Key Events Section */}
      <div style={keyEventsStyle}>
        <h3 style={sectionTitleStyle}>
          Key Events <span style={infoIconStyle}>i</span>
        </h3>
        <div style={eventCardsStyle}>
          <div style={blueCardStyle}>
            <div style={eventIconStyle}>📄</div>
            <div style={eventContentStyle}>
              <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              <p>
                Dui vel quis dignissim mattis enim tincidunt. Ac phasellus risus
                est faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum.
              </p>
            </div>
          </div>
          <div style={greenCardStyle}>
            <div style={eventIconStyle}>📈</div>
            <div style={eventContentStyle}>
              <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              <p>
                Dui vel quis dignissim mattis enim tincidunt. Sed vitae sit
                nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div style={analystEstimatesStyle}>
        <h3 style={sectionTitleStyle}>
          Analyst Estimates <span style={infoIconStyle}>i</span>
        </h3>
        <div style={estimateContentStyle}>
          <div style={circleStyle}>
            <span>76%</span>
          </div>
          <div style={estimateBarsStyle}>
            <div style={barStyle}>
              <span>Buy</span>
              <div style={{ ...buyBarStyle, width: "76%" }}></div>
              <span>76%</span>
            </div>
            <div style={barStyle}>
              <span>Hold</span>
              <div style={{ ...holdBarStyle, width: "8%" }}></div>
              <span>8%</span>
            </div>
            <div style={barStyle}>
              <span>Sell</span>
              <div style={{ ...sellBarStyle, width: "16%" }}></div>
              <span>16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
