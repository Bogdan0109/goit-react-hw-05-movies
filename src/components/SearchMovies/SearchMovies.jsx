export const SearchMovies = ({ onChange, value }) => {
  return (
    <div>
      <input
        type="text"
        name="movies-name"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
