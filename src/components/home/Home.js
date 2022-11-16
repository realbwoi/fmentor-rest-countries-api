import Search from './Search';
import Dropdown from './Dropdown';
import Card from './Card';

export default function Home({allCountries}) {

  return (
    <div>
      <div>
        <Search />
        <Dropdown />
      </div>
      {allCountries.map((country, idx) => {
        return (
          <Card key={idx} country={{...country}} />
        )
      })}
    </div>
  )
}
