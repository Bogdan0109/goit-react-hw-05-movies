export const SearchMovies = ({ onSubmit }) => {
  const onHandlerSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.moviesName.value;

    onSubmit(inputValue);
    form.reset();
  };
  return (
    <div>
      <form onSubmit={onHandlerSubmit}>
        <input type="text" name="moviesName" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
