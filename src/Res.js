import React from 'react';
import './Res.css';

function Res({ region, data }) {
  const deaths = data.deaths.toLocaleString();
  const recovered = data.discharged.toLocaleString();
  
  return (
    <div className="results-container">
      <h2><u>{region}</u></h2>
      <p>Confirmed: <span className='pink'>{data.totalConfirmed}</span></p>
      <p>Recovered: <span className="green">{recovered}</span></p>
      <p>Deaths: <span className="red">{deaths}</span></p>
    </div>
  );
}

export default Res;
