import style from './Header.module.css';
import { FaShoppingBag, FaSearch } from 'react-icons/fa';

export default function Header() {
    return (
        <header className={style.header}>
            <a href="/">
                <FaShoppingBag />
            </a>
            <nav>
                <form>
                    <input type="text" name="searchbar" id="searchbar" placeholder='Busque um produto' />
                    <button>
                        <FaSearch />
                    </button>
                </form>
            </nav>
        </header>
    )
}