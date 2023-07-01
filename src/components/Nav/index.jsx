import SearchBar from '../SearchBar.jsx';
import {Link} from 'react-router-dom'
import styles from '../Card/Card.module.css'

export default function Nav({onSearch}){
    return(
        <div className={styles.navContainer}>
            
            <SearchBar onSearch={onSearch} />
            
           <div className={styles.navBotones} >
                <Link  to='/about'>
                    <button>About</button>
                </Link>
                <Link to='/home'>
                    <button >Home</button>
                </Link>
                <Link to='/favorites'>
                    <button >Favorites</button>
                </Link>
            </div>
        </div>
    )
}