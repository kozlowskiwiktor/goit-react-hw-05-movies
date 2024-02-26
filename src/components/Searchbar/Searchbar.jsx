import css from './Searchbar.module.css';

export const Searchbar = ({ searchQuery, handleChange, handleSubmit }) => {
  return (
    <div className={css.searchbar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchQuery}
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
