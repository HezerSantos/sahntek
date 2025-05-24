import { Link, useNavigate } from "react-router-dom"

import logo from '../../assets/images/logo.jpg'
import { useRef } from "react"

const openNavbar = (sideNav) => {
    sideNav.current?.classList.add('navbar__side__open')
}

const closeNavbar = (sideNav) => {
    sideNav.current?.classList.remove('navbar__side__open')
}
const NavBar = () => {
    const navBarSide = useRef(null)
    return(
        <>
            <nav className="navbar__main">
                <div className="navbar__header">
                    <img src={logo} alt="logo"/>
                    <p>SAHNTEK</p>
                    <button className="navbar__side__toggle" onClick={() => openNavbar(navBarSide)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                <div className="navbar__links">
                    <ul>
                        <li>
                            <Link to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'/browse-computers'}> 
                                Browse Computers
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar__side" ref={navBarSide}>
                <button className="navbar__side__offload" onClick={() => closeNavbar(navBarSide)}></button>
                <button className="navbar__side__button" onClick={() => closeNavbar(navBarSide)}>
                        <div></div>
                        <div></div>
                        <div></div>
                </button>
                <div className="navbar__side__links">
                    <ul>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/browse-computers'>
                                Browse Computers
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="fixed__filler"></div>
        </>
    )
}

export default NavBar