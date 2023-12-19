import { useEffect, useState } from "react";
import "./App.css";
import {
  Leagues,
  FetchResultNotOK,
  FetchResultOK,
} from "./@types/AllSportsAPI";
import LeaguesCard from "./LeaguesCard";

function App() {
  const [leauges, setLeagues] = useState<Leagues[]>([]);
  const [error, setError] = useState("");

  async function fetchData() {
    try {
      const response = await fetch(
        "https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=53fa40fb90c35d9d753e9af37ea9573c22c861f66ec57bb1b19f8f0828bcbd35"
      );
      if (response.ok) {
        const result = (await response.json()) as FetchResultOK;
        console.log(result);
        setLeagues(result.result);
      } else {
        const result = (await response.json()) as FetchResultNotOK;
        console.log(result);
        setError(result.error);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData().catch((e) => console.log(e));
  }, []);
  return (
    <>
      <div>
        {leauges.map((leauge) => {
          return <LeaguesCard key={leauge.league_key} league={leauge} />;
        })}
      </div>
    </>
  );
}

export default App;
