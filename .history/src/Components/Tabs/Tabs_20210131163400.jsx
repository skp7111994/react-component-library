import React, { useState } from 'react';
import './Tabs.css'

const Tabs = (props) => {
    const { tabs } = props;
    const [selectedTab, setSelectedTab] = useState(0);
    return <>
        <div className="tab-container">
            {tabs.map((tab, tabIndex) => <div key={tabIndex}>
                <div
                    className={`tab ${tabIndex === selectedTab && 'active'}`}
                    onClick={() => setSelectedTab(tabIndex)}
                >
                    {tab.label}
                </div>
                {tabIndex === selectedTab && tab.markup}
            </div>)}
        </div>
    </>
};

export default Tabs;