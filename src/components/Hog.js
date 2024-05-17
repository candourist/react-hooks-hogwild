import React from "react";

const HogTile = ({ hog, onClick }) => {
  return (
    <div className="ui card" onClick={() => onClick(hog)}>
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <div className="header">{hog.name}</div>
      </div>
    </div>
  );
};

export default HogTile;