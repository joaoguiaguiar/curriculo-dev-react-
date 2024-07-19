import './menu.css';
import MenuLink from './menuLink';

const Menu = () => {
  return (
    <header>
      <nav className='navegacao'>
        <MenuLink to='/'>
          Start
        </MenuLink>
        /
        <MenuLink to='/about-me'> {/* Corrigido o caminho */}
          About Me
        </MenuLink>
      </nav>
    </header>
  );
}

export default Menu;
