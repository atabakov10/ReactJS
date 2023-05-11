import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/about/*' element={<About />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
