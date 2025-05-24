import { Link } from "react-router-dom"
const Footer = () => {
    return(
        <>
            <footer>
                <section>
                    <div className="cr__original">
                        <h3>SAHNTEK</h3>
                        <ul>
                            <li>
                                <p>Powering Your Next Big Move</p>
                            </li>
                            <li>
                                <p className="copy__right">© 2025 Sahntek. All rights reserved.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__border">
                        <h3>COMPANY</h3>
                        <ul>
                            <li>
                                <Link>People</Link>
                            </li>
                            <li>
                                <Link>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__border">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li>
                                <Link>Home</Link>
                            </li>
                            <li>
                                <Link>Shop Computers</Link>
                            </li>
                            <li>
                                <Link>Pricing</Link>
                            </li>
                            <li>
                                <Link>FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="support__links footer__border">
                        <h3>SUPPORT LINKS</h3>
                        <ul>
                            <li>
                                <Link>Shipping and Returns</Link>
                            </li>
                            <li>
                                <Link>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link>Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright__contianer">
                        <p className="copy__right">© 2025 Sahntek. All rights reserved.</p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer