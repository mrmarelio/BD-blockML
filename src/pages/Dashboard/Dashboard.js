import React from "react";

import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__center">
        <h1 className="h1-font-style">BlockML - Block Markup Language</h1>
        <h2 className="h2-font-style">
          Vaizdinio programavimo įrankis, skirtas kurti svetaines taikant
          JavaScript biblioteką &quot;Blockly&quot;.
        </h2>
        <hr></hr>

        <section className="dashboard__section">
          <h3 className="h3-font-style">
            Bakalauro darbo tema: <br></br> Mokomosios svetainės kūrimas taikant
            vaizdinio programavimo principus skirtos html ir css pagrindų
            mokymui
          </h3>
          <p>Dar kazka cia parasyt</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
