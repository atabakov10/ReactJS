import styles from './Navigation.module.css';
import { Link, NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive && styles['nav-active']} to="/about">About</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/characters">Characters</NavLink></li>
            </ul>
        </nav>

    )
}