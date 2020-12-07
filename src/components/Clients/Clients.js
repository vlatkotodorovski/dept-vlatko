import React, { useState } from "react";
import Filter from "../Filter/Filter";
import "./Clients.css";
import Data from "../Data/Data.json";

const Clients = () => {
  const [clients, setClients] = useState(Data);
  const [cat, setCat] = useState([]);
  const [ind, setInd] = useState([]);

  const filterCategory = (e) => {
    let categ = e.target.value;
    if (categ === "all") {
      setCat(categ);
      setClients(Data);
    } else {
      setCat(categ);
      setClients(
        Data.filter((client) => {
          return client.categories.indexOf(categ) >= 0;
        })
      );
    }
  };

  const filterIndustry = (e) => {
    let indus = e.target.value;
    if (indus === "all") {
      setInd(indus);
      setClients(Data);
    } else {
      setInd(indus);
      setClients(
        clients.filter((client) => {
          return client.industries.indexOf(indus) >= 0;
        })
      );
    }
  };

  return (
    <div className="clients-content">
      <Filter
        filterCategory={filterCategory}
        cat={cat}
        ind={ind}
        filterIndustry={filterIndustry}
      />

      <div className="clients-container">
        {clients.map((client) => {
          return (
            <div className={`client ${client.list ? client.list : ""}`}>
              <img loading="lazy" src={client.image} alt="" />
              <h1>{client.name}</h1>
              <h2>{client.title}</h2>
              <div className="view-case">
                <p className="arrow-client">&#9654;</p>
                <a href="#">VIEW CASE</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
