import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Hog from "./Hog";

function App() {
  const [selectedHog, setSelectedHog] = useState(null);
  const [greasedFilter, setGreasedFilter] = useState(false);

  const handleHogClick = (hog) => {
    setSelectedHog(hog);
  };

  const toggleGreasedFilter = () => {
    setGreasedFilter(!greasedFilter);
  };

  const filteredHogs = greasedFilter ? hogs.filter((hog) => hog.greased) : hogs;

  return (
    <div className="App ui grid container">
      <Nav />
      <div className="ui row">
        <div className="four wide column">
          <div className="ui segment">
            <h2>Hogs</h2>
            <button onClick={toggleGreasedFilter}>
              {greasedFilter ? "Show All Hogs" : "Show Greased Hogs Only"}
            </button>
            {filteredHogs.map((hog) => (
              <Hog key={hog.name} hog={hog} onClick={handleHogClick} />
            ))}
          </div>
        </div>
        <div className="twelve wide column">
          {selectedHog && (
            <div className="ui segment">
              <h2>{selectedHog.name}</h2>
              <p>Specialty: {selectedHog.specialty}</p>
              <p>Weight: {selectedHog.weight}</p>
              <p>Greased: {selectedHog.greased ? "Yes" : "No"}</p>
              <p>
                Highest Medal Achieved: {selectedHog["highest medal achieved"]}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;