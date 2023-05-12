import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import CharacterList from './components/CharacterList';
import Character from './components/Character';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/about/*' element={<About />} />
                    <Route path='/characters' element={<CharacterList />} />
                    <Route path='/characters/:characterId/*' element={<Character />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
