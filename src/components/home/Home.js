import Search from './Search';
import Dropdown from './Dropdown';
import Card from './Card';

export default function Home({allCountries}) {
  console.log(allCountries);

  return (
    <main>
      <div className='search-wrapper'>
        <Search />
        <Dropdown />
      </div>
      <div className="cards-wrapper">
        {allCountries.map((country, idx) => {
          return (
            <Card key={idx} country={{...country}} />
          )
        })}
      </div>
    </main>
  )
}
