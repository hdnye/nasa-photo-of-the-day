import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaCard from './Component/NASA/NasaCard';


//Set API data to slice of state creates k:v pairs//


function App() {
  
  const[data, setData] = useState([]);

  useEffect(() => {

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=IgJjhuq2zoQTYsHOkHdVi9igyRRW0t1uUTJ5rL3C`)
      
    .then( response => {
        console.log(response.data);
       setData(response.data);
    })
    .catch( error => {
      console.log(error);
  });
}, []);

  return (
    <div className="App">
      {/* <p>
       Read through the instructions in the README.md file to build your NASA
        app! Have fun  span🚀!            
      </p> */}
      <NasaCard 
      title={data.title}
      url={data.url}
      explanation={data.explanation}
      date={data.date}      
      />
    </div>
  );
}

export default App;
