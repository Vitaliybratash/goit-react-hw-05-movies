import { useState } from 'react';

export const SearchForm = ({submitHandler}) => {
  const [search, setSearch] = useState('');
  const onSubmit = (e)=> {
      e.preventDefault()
      submitHandler(search)
      
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};
