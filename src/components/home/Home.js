import Search from './Search';
import Dropdown from './Dropdown';
import Card from './Card';

export default function Home({allCountries, handleSearch}) {
  console.log(allCountries.length);

  return (
    <main>
      <div className="search-wrapper">
        <div className="search-inner-wrapper">
          <Search handleSearch={handleSearch} allCountries={allCountries} />
          <Dropdown />
        </div>
      </div>
      {allCountries.length === 0 ? (
        <div className='search-error'>
          <p>
            Unfortunately there aren't any countries that match that term.
            Please search with another term.
          </p>
        </div>
      ) : (
        <div className="cards-wrapper">
          {allCountries.map((country, idx) => {
            return <Card key={idx} country={{ ...country }} />;
          })}
        </div>
      )}
    </main>
  );
}
