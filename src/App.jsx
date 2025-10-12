import republican from "./republican.png";
import democratic from "./democratic.png";
import american from "./american.png";
import "./App.css";
import { useState } from "react";

const Ballot = ({democrat, setDemocratic, republic, setRepublican, independent, setIndependent}) => {
  return (
    <div className="party-container">
      <div className="party">
        <h2>Democrats</h2>
        <div className="box blue">
          <img src={democratic} alt="Democrats" className="party-image" />
          <br />
          <button className="vote-button" onClick={()=>setDemocratic(democrat + 1)}>Vote</button>
          <p className="vote-count">Vote Count: {democrat}</p>
        </div>
      </div>

      <div className="party">
        <h2>Republicans</h2>
        <div className="box red">
          <img src={republican} alt="Republicans" className="party-image" />
          <br />
          <button className="vote-button" onClick={()=>setRepublican(republic + 1)}>Vote</button>
          <p className="vote-count">Vote Count: {republic}</p>
        </div>
      </div>

      <div className="party">
        <h2>Independent</h2>
        <div className="box yellow">
          <img src={american} alt="Independents" className="party-image" />
          <br />
          <button className="vote-button" onClick={()=>setIndependent(independent + 1)}>Vote</button>
          <p className="vote-count">Vote Count: {independent}</p>
        </div>
      </div>
    </div>
  );
};

const ElectionResults = ({democrat, republic, independent}) => {
  const total = democrat + republic + independent;
  const pct = (value) => (total ? ((value / total) * 100).toFixed(2) : '0.00');

  if (total === 0) {
    return (
      <div className="vote-statistics">
        <h2>Vote Statistics</h2>
        <h3>Currently, the system has not received any votes yet.</h3>
      </div> 
    );
  }
  return (
      <div className="vote-statistics">
        <h2>Vote Statistics</h2>
        <p className="vote-count">Total Votes: {total}</p>
        <p className="vote-count">Democrats: {democrat} ({pct(democrat)}%)</p>
        <p className="vote-count">Republicans: {republic} ({pct(republic)}%)</p>
        <p className="vote-count">Independent: {independent} ({pct(independent)}%)</p>
      </div>
  );
};

const App = () => {
  const [democrat, setDemocratic] = useState(0);
  const [republic, setRepublican] = useState(0);
  const [independent, setIndependent] = useState(0);

  return (
    <div className="party-container">
      <Ballot
        democrat={democrat}
        setDemocratic={setDemocratic}
        republic={republic}
        setRepublican={setRepublican}
        independent={independent}
        setIndependent={setIndependent}
      />

      <ElectionResults democrat={democrat} republic={republic} independent={independent}/>
    </div>

   
  );
};

export default App;
