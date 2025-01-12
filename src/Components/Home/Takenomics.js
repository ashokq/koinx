import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  const data = {
    labels: ["Crowdsale investors", "Foundation"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#007bff", "#ff9900"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          padding: 10,
          font: { size: 10 },
        },
      },
    },
  };

  const styles = {
    container: {
    //   maxWidth: "600px",
        marginTop:10,
        padding:"10px",
        border: '1px solid #ddd',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        backgroundColor:"#FFFFFF"
    },
    header: {
      textAlign: "left",
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
    },
    subHeader: {
      textAlign: "left",
      marginBottom: "10px",
      fontSize: "18px",
      fontWeight: "bold",
    },
    chartContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    paragraph: {
      color: "#3E424A",
      fontSize: "16px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Tokenomics</h2>
      <h4 style={styles.subHeader}>Initial Distribution</h4>
      <div style={styles.chartContainer}>
        <Pie data={data} options={options} />
      </div>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
        consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum
        augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Volputate ipsum aliquet odio nisi
        eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;
