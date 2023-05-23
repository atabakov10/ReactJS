import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import MainNavigation from './components/MainNavigation';
import CharacterList from './components/CharacterList';
import Character from './components/Character';
import Film from './components/Film';
import Vehicle from './components/Vehicle';
import Starship from './components/Starship';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MainNavigation />
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/about/*' element={<About />} />
                    <Route path='/characters' element={<CharacterList />} />
                    <Route path='/characters/:characterId/*' element={<Character />} />
                    <Route path='/films/:filmId/*' element={<Film />}/>
                    <Route path='/vehicles/:vehicleId/*' element={<Vehicle />}/>
                    <Route path='/starships/:starshipId/*' element={<Starship />}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
