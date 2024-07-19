import { Link, useLocation } from 'react-router-dom'
import './menuLink.css'

const MenuLink = (props) => {
    const localizacao = useLocation()
 
    // const className = `link ${localizacao.pathname === props.to ? 'linkDestacado' : ''}`

    return (
        <Link
            className='link'
            to={props.to}
        >
            {props.children}
        </Link>
    )
}

export default MenuLink
