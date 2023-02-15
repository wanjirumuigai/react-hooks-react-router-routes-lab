import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((item) => {
        return (
          <div key={item.name}>
            <h2>Name: {item.name}</h2>
            <p>Movies:</p>
            <ul>
              {item.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
