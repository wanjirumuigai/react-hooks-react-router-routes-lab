import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((item) => {
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

export default Directors;
