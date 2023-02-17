import './Search.scss';
import search from '../../assets/search.svg';

const Search = () => {
    return (
        <div className="search">
            <button><image href={search}/></button>
            <input className="form-control"></input>
            <buttn></buttn>
        </div>
    );
}

export default Search;