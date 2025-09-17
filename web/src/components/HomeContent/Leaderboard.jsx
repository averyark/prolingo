import React from "react";
import "./Leaderboard.css";

const LeaderboardEntry = ({ image, index, label, value }) => {
  const color = index === "1"
    ? "#19ff00"
    : index === "2"
    ? "#0059FF"
    : index === "3"
    ? "#FFA602"
    : "#FFFFFF";

  return (
    <div className="frame-2">
      <div className="text-wrapper-4" style={{ color }}>{index}</div>

      {image ? (
        <img
          className="ellipse"
          alt={label}
          src={image}
          style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover" }}
        />
      ) : (
        <div className="ellipse" />
      )}

      <div className="overlap-group">
        <div className="text-wrapper-5">{label}</div>
        <div className="text-wrapper-6">{value}</div>
      </div>
    </div>
  );
}

const Leaderboard = () => {
  return (
    <div className="content">
      <div className="titles">
        <div className="text-wrapper">Leaderboards</div>

        <p className="div">Top 50 Highest streak globally</p>
      </div>

      <div className="line" />

      <div className="scroll">
        <LeaderboardEntry label = "BigOrange" value = "100" index = "1" image = "/assets/Icon.jpg" />
        <LeaderboardEntry label = "BigOrange" value = "98" index = "2"/>
      </div>
    </div>
  );
};

export default Leaderboard;
