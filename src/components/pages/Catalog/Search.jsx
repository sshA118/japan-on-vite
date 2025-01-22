import PropTypes from "prop-types";

const Search = ({ onSearch }) => {
  return (
    <div className="search">
      <div className="search__input">
        <input
          type="text"
          placeholder="Поиск"
          id="search"
          className="input"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default Search;
