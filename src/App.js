import Filters from './components/Filters/Filters.js';
// import Products from './components/Products.js';
import Search from './components/Search/Search.js';

import './App.scss';

const App = () => {
    return (
        <div className='grid-global'>
            <header className='header'>
                <Search/>
                <Filters />
            </header>
        </div>
    );
}

export default App;
