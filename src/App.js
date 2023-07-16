import React from 'react';
import axios from 'axios';
import Res from './Res';
import './App.css';
import Searching from './Searching';

function App() {
  const [region, setRegion] = React.useState('');
  const [regionsData, setRegionsData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.rootnet.in/covid19-in/stats/latest`);
      setRegionsData(response.data.data.regional);
      setFilteredData(response.data.data.regional);
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredData(regionsData);
      setRegion('');
    } else {
      const filtered = regionsData.filter((region) =>
        region.loc.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
      setRegion(query);
    }
  };  
  

  return (
    
    <div className="app-container">
      <h1>COVID-19 Data by Region</h1>
      <Searching onSearch={handleSearch} />
    <div className='wra'>
      {filteredData.length > 0 ? (
        filteredData.map((region) => (
          <Res key={region.loc} data={region} region={region.loc} />
        ))
      ) : (
        <p>No data available for {region}</p>
      )}
      </div>
    </div>
  );
}

export default App;
