import React from 'react';
import "./stats.css";

const Stats = () => {
return (
    <div className="stats-container">
        {/* Menu bar */}
        <div className="menu-bar">
            <div className="menu-bar-inner">
            <div className="menu-shadow"></div>
            <div className="menu-main"></div>
            </div>
            <div className="menu-icon">
            <div className="menu-icon-shadow"></div>
            {/*<button className="menu-icon-main"></button>*/}
            <button><span className="menu-icon-main"></span></button></div>
        </div>

        {/* Current Statistics */}
        <div className="current-stats">
            <div className="current-stats-shadow"></div>
            <div className="current-stats-main">
            <h3 className="stats-title">Current Statistics</h3>
            {["#FF0000", "#2D8CF0", "#FFBF00"].map((color, index) => (
                <div className="stats-row" key={index}>
                <div
                    className="stats-icon"
                    style={{ background: color }}
                ></div>
                <div className="stats-bar-container">
                    <div
                    className="stats-bar"
                    style={{ background: color, width: `${(index + 1) * 30}%` }}
                    ></div>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Welcome box */}
        <div className="welcome-box">
            <div className="welcome-shadow"></div>
            <div className="welcome-main">
            <h3 className="welcome-title">Welcome!</h3>
            <textarea
                placeholder="Message [AI bot]"
                className="welcome-textarea"
            ></textarea>
            <button className="welcome-button">↑</button>
            </div>
        </div>

        {/* Title and subtitle */}
        <div className="title-container">
            <h1 className="title">[Finance Ascension]</h1>
            <h2 className="subtitle">A financial literacy game.</h2>
        </div>

        {/* Player and Inventory */}
        <div className="player-inventory">
            <div className="player-shadow"></div>
            <div className="player-main"></div>
        </div>

        {/* Quests */}
        <div className="quests">
            <div className="quests-shadow"></div>
            <div className="quests-main">
            <h1 className="quests-title">Oracle</h1>
            <h3 className="quests-subtitle">Quests</h3>
            </div>
        </div>
        </div>
    );
};

export default Stats;
