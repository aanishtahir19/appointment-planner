import React from "react";
import {Tile} from '../tile/Tile'
export const TileList = ({tiles}) => {
  return (
    <div>
      {
        tiles.map((obj, index) => (
          <Tile obj={obj} key={index}/>
        ))
      }
    </div>
  );
};
