import React from "react";

export const Tile = ({obj}) => {
  return (
    <div className="tile-container">
      {
        Object.values(obj).map((val, index) => {
          if(index===0){
            return <p className="tile-title">{val}</p>
          }
          return <p className="tile">{val}</p>
        })
      }
    </div>
  );
};
