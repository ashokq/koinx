import React,{useState,useEffect} from 'react';

const PerformanceCard = () => {

const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const styles = {
        card: {
            padding: '20px',
            backgroundColor:"#FFFFFF",
            marginTop:10,
            border: '1px solid #ddd',
            borderRadius: '10px',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        },
        progressBar: {
            height: '10px',
            width: '100%',
            background: '#ddd',
            borderRadius: '5px',
            marginBottom: '10px',
            overflow: 'hidden',
            position: 'relative'
        },
        progressFill: {
            height: '100%',
            background: 'linear-gradient(90deg, red, orange, green)',
            position: 'absolute',
            left: 0
        },
        progressLabel: {
            textAlign: 'center',
            margin: '5px 0'
        },
        fundamentals: {
            display: isMobile?'block':'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
        },
        column: {
            padding: '10px'
        },
        highRed: {
            color: 'red'
        }
    };

    return (
        <div style={styles.card}>
            <h2>Performance</h2>

            {/* Performance Bar */}
            <p style={styles.progressLabel}>Today's Low</p>
            <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: '75%' }}></div>
            </div>
            <p style={styles.progressLabel}>Today's High</p>

            {/* Fundamentals Section */}
            <h3>Fundamentals</h3>
            <div style={styles.fundamentals}>
                <div style={styles.column}>
                    <p><strong>Bitcoin Price:</strong> $16,815.46</p>
                    <p><strong>24h Low / 24h High:</strong> $16,382.07 / $16,874.12</p>
                    <p><strong>Trading Volume:</strong> $23,249,202,782</p>
                </div>

                <div style={styles.column}>
                    <p><strong>Market Cap:</strong> $323,507,290,047</p>
                    <p><strong>Market Cap Dominance:</strong> 38.343%</p>
                    <p><strong>All-Time High:</strong> <span style={styles.highRed}>$69,044.77 -75.6%</span></p>
                </div>
            </div>
        </div>
    );
}

export default PerformanceCard;
