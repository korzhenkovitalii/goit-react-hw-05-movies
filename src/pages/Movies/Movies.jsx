export const Movies = () => {
  return (
    <>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          // value={searchQuery}
          // onChange={handleSearchQueryChange}
        />

        <button type="submit">Search</button>
      </form>
    </>
  );
};
