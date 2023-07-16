import React from 'react';
import './Searching.css';

function Searching(props) {
  const { onSearch } = props;
  const [query, setQuery] = React.useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a region..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Searching;
