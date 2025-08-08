import React, { useState } from "react";
import "./ChromeMock.css";
import { ChevronLeft, ChevronRight, RotateCw, Lock, Star, MoreVertical } from "lucide-react";

export default function ChromeMock() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["New Tab", "Example"];
  const [search, setSearch] = useState("");

  return (
    <div className="app-container">
      <div className="chrome-window">
        {/* Window Controls */}
        <div className="window-controls">
          <span className="control-btn minimize">–</span>
          <span className="control-btn maximize">□</span>
          <span className="control-btn close">×</span>
        </div>

        {/* Top Bar */}
        <div className="top-bar">
          {/* Tabs */}
          <div className="tabs">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <span>{tab}</span>
                <span className="tab-close">×</span>
              </div>
            ))}
            <div className="new-tab">+</div>
          </div>

          {/* Toolbar */}
          <div className="toolbar">
            <ChevronLeft size={18} className="icon" />
            <ChevronRight size={18} className="icon" />
            <RotateCw size={18} className="icon" />

            <div className="address-bar">
              <Lock size={14} className="icon" />
              <input type="text" value="https://google.com" readOnly />
              <Star size={14} className="icon" />
            </div>

            <MoreVertical size={18} className="icon" />
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <h2 className="google-title">Google</h2>
          <div className="search-bar item-center">
            <input
              type="text"
              placeholder="Search Platforms"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>

      </div>
    </div>

  );
}
