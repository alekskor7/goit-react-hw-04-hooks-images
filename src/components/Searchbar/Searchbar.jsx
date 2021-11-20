import { useState } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';
import Style from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const result = query.trim();
    if (result) {
      onSubmit(result);
    }
    setQuery('');
  };

  return (
    <header className={Style.Searchbar}>
      <form className={Style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={Style.SearchFormButton} >
          <span className={Style.SearchFormButtonLabel}><BiSearchAlt2 size="25px" /></span>
        </button>

        <input
          className={Style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};