import React, { useState, useEffect } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a9e3a8b240494d66a0304a42fc2de81f`;
      const response = await fetch(url);
      const respJson = await response.json();
      setCity(respJson.main);
      
    };
    fetchApi();
  }, [search]);

  return (
    <div className="main-box">
      <div className="box">
        <div className="search">
          <input
            type="search"
            placeholder="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="city">
              <h2>
                <i className="fas fa-street-view"></i>
              </h2>
              <h2>{search}</h2>
            </div>
            <div className="temp">
              <h2>
                {city.temp}<span>&#8451;</span>
              </h2>
              <p>
                MIN:{city.temp_min}<span>&#8451;</span>|MAX:{city.temp_max}<span>&#8451;</span>
              </p>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
