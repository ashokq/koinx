import React, { useState,useEffect } from 'react';


const TaskTabs = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
        
          useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth <= 768);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
          }, []);
    const [activeTab, setActiveTab] = useState('Overview');

    const tabs = ['Overview', 'Fundamentals', 'News Insights', 'Sentiments', 'Team', 'Technicals', 'Tokenomics'];
    const tabsStyle= {
        display: isMobile?"block":'flex',
        borderBottom: '2px solid #ddd',
    }

    return (
        <div style={styles.tabsContainer}>
            {/* Tab Buttons */}
            <div style={tabsStyle}>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        style={activeTab === tab ? { ...styles.tab, ...styles.activeTab } : styles.tab}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {/* <div style={styles.tabContent}>
                <h2>{activeTab} Content</h2>
                <p>This is the content for the {activeTab} section.</p>
            </div> */}
        </div>
    );
}

// Inline CSS styles
const styles = {
    tabsContainer: {
        fontFamily: 'Arial, sans-serif',
        marginTop:"15px"
    },
    tabs: {
        // display: isMobile?"block":'flex',
        borderBottom: '2px solid #ddd',
    },
    tab: {
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        fontSize: '16px',
        color: '#555',
        outline: 'none',
    },
    activeTab: {
        color: 'blue',
        //borderBottom: '2px solid blue',
        fontWeight: 'bold',
    },
    tabContent: {
        padding: '20px',
    },
};

export default TaskTabs;
