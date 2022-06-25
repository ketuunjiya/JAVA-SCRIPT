import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container-fluid bg-light">
            <footer className="py-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to={'/education'} className="nav-link px-2 text-muted">Education</Link></li>
                    <li className="nav-item"><Link to={'/experience'} className="nav-link px-2 text-muted">Experience</Link></li>
                </ul>
                <p className="text-center text-muted">© 2022 | Ketu Unjiya</p>
            </footer>
        </div>
    );
}

export default Footer;