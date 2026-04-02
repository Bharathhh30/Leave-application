import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Dashboard.css";

function LeaveBalance({ user, setPage, setUser }) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/leaves/balance/${user.email}`)
      .then((res) => setBalance(res.data));
  }, []);

  return (
    <>
      <Navbar setUser={setUser} />
      <div className="page">
        <div className="card">
          <h2>Leave Balance</h2>
          <h1>{balance} Days Remaining</h1>
          <button onClick={() => setPage("dashboard")}>Back</button>
        </div>
      </div>
    </>
  );
}

export default LeaveBalance;