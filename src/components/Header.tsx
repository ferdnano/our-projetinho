import './Header.css'
import reactSVG from '../assets/react.svg';

function Header() {
    const categories = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

    return (
        <header>
            <div className="logo">
                <img src={reactSVG} alt="Ícone do site" />
            </div>
            <h1>Mamamute</h1>
            <nav>
                <ul className="categories">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <a href="#">{category}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header