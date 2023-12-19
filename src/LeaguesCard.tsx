import React from "react";
import { Leagues } from "./@types/AllSportsAPI";

type Props = {
  leagues: Leagues;
};
function LeaguesCard({ league }: Props) {
  const divStyle: React.CSSProperties = {
    border: "black 1px solid",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={divStyle}>
      <h1>{league.league_name}</h1>
      <img
        src={league.league_logo}
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
}

export default LeaguesCard;
